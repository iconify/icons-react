import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/y/yh1fggbau.css';
import '../../css/o/o_x_kbchi.css';
import '../../css/e/emxd30-sb.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="yh1fggbau"/><path class="o_x_kbchi"/><path class="emxd30-sb"/></g>`,
		"fallback": "glyphs:cloudy-mostly",
	});
}

export default Component;
