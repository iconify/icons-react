import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/v/vm5i1xbah.css';
import '../../css/j/j5ehdfnbp.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="vm5i1xbah"/><path class="j5ehdfnbp"/></g>`,
		"fallback": "glyphs:compass",
	});
}

export default Component;
