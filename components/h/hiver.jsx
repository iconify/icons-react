import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/ck-5p2bwz.css';
import '../../css/o/oarp39blx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="ck-5p2bwz"/><path class="oarp39blx"/></g>`,
		"fallback": "thesvg-color:hiver",
	});
}

export default Component;
