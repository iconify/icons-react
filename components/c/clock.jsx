import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/m/mkrulybhz.css';
import '../../css/b/b9haxfb7r.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="mkrulybhz"/><path class="b9haxfb7r"/></g>`,
		"fallback": "glyphs:clock",
	});
}

export default Component;
