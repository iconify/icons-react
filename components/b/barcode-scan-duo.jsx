import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/eovlqsbxj.css';
import '../../css/j/jz62th12y.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="eovlqsbxj"/><path class="jz62th12y"/></g>`,
		"fallback": "glyphs:barcode-scan-duo",
	});
}

export default Component;
