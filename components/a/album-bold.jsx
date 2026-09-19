import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/o/ocu2c7b-o.css';
import '../../css/e/e-wi31cyy.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="ocu2c7b-o"/><path class="e-wi31cyy"/></g>`,
		"fallback": "glyphs:album-bold",
	});
}

export default Component;
