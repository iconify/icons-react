import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/g/gz8ihjp-s.css';
import '../../css/s/sgluudbbk.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="gz8ihjp-s"/><path class="sgluudbbk"/></g>`,
		"fallback": "glyphs:baseball-1",
	});
}

export default Component;
