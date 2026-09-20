import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cviv7ubzl.css';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/wb0n91bnb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><path id="SVGye9ORcdG" class="cviv7ubzl"/></defs><g class="cuyn6tgcc"><use href="#SVGye9ORcdG"/><use href="#SVGye9ORcdG"/><path class="wb0n91bnb"/></g>`,
		"fallback": "reicon:chart-success-filled",
	});
}

export default Component;
