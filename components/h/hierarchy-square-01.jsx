import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/c/cmbrr6boc.css';
import '../../css/x/xx30jc17f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="cmbrr6boc"/><path class="xx30jc17f"/></g>`,
		"fallback": "hugeicons:hierarchy-square-01",
	});
}

export default Component;
