import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/s/sknri1h1x.css';
import '../../css/y/yfpe67l2v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="sknri1h1x"/><path class="yfpe67l2v"/></g>`,
		"fallback": "reicon:bookmark-square",
	});
}

export default Component;
