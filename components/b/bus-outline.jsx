import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/y/ygcr4ibxb.css';
import '../../css/q/qgieelblm.css';
import '../../css/y/yx4lsi7ye.css';
import '../../css/e/e-26mxbxv.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="ygcr4ibxb"/><path class="qgieelblm"/><path class="yx4lsi7ye"/><path class="e-26mxbxv"/></g>`,
		"fallback": "glyphs:bus-outline",
	});
}

export default Component;
