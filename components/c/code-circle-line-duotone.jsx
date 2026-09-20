import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/y/yp54sytzi.css';
import '../../css/b/b_mqzbbbw.css';
import '../../css/o/o0vcg8bqt.css';
import '../../css/v/vx9mvac0z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="yp54sytzi"/><path class="b_mqzbbbw"/><path class="o0vcg8bqt"/><path class="vx9mvac0z"/></g>`,
		"fallback": "solar:code-circle-line-duotone",
	});
}

export default Component;
