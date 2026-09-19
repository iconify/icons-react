import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/b/bn1rgwb9r.css';
import '../../css/a/aulfpxi_o.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="bn1rgwb9r"/><path class="aulfpxi_o"/></g>`,
		"fallback": "glyphs:flushed-bold",
	});
}

export default Component;
