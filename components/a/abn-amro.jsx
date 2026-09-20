import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/h/hlmuacczv.css';
import '../../css/x/xqpu6_dfe.css';

const viewBox = {"width":1549,"height":2062};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="hlmuacczv"/><path class="xqpu6_dfe"/></g>`,
		"fallback": "thesvg-color:abn-amro",
	});
}

export default Component;
