import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/g/gaey7fiif.css';
import '../../css/a/a6wvo-b3o.css';
import '../../css/j/jojyntb-y.css';
import '../../css/z/ztzrfkqqj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="gaey7fiif"/><path class="a6wvo-b3o"/><path class="jojyntb-y"/><path class="ztzrfkqqj"/></g>`,
		"fallback": "solar:grid-3x3-linear",
	});
}

export default Component;
