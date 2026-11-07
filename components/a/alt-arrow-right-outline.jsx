import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ust9b7bnw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ust9b7bnw"/>`,
		"fallback": "solar:alt-arrow-right-outline",
	});
}

export default Component;
