import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/v/viffdvb1f.css';
import '../../css/w/wzad4u6zf.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="viffdvb1f"/><path class="wzad4u6zf"/></g>`,
		"fallback": "glyphs:fire-smoke-bold",
	});
}

export default Component;
