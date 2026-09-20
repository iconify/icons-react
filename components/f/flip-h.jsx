import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fw9m35gro.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fw9m35gro"/>`,
		"fallback": "uil:flip-h",
	});
}

export default Component;
