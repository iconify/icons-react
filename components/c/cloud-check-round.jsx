import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ojqjc3bhk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ojqjc3bhk"/>`,
		"fallback": "coolicons:cloud-check-round",
	});
}

export default Component;
