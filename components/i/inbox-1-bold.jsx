import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/p/pz19wqb8x.css';
import '../../css/p/p-4edx2ue.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="pz19wqb8x"/><path class="p-4edx2ue"/></g>`,
		"fallback": "glyphs:inbox-1-bold",
	});
}

export default Component;
