import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/z/znk42ettd.css';
import '../../css/t/tqwqjm_wa.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="znk42ettd"/><path class="tqwqjm_wa"/></g>`,
		"fallback": "glyphs:cloudy-bold",
	});
}

export default Component;
