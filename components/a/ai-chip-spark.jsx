import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cg7fccbnq.css';
import '../../css/b/b7n-jjpih.css';
import '../../css/k/keevlsb2d.css';
import '../../css/v/vu02wxbxf.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="cg7fccbnq"/><path class="b7n-jjpih"/><path class="keevlsb2d"/><path class="vu02wxbxf"/></g>`,
		"fallback": "streamline-color:ai-chip-spark",
	});
}

export default Component;
