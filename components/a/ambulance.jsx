import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/j/jx3ay999g.css';
import '../../css/b/bolb5gbrp.css';
import '../../css/j/js09wjuez.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="jx3ay999g"/><path class="bolb5gbrp"/><path class="js09wjuez"/></g>`,
		"fallback": "glyphs:ambulance",
	});
}

export default Component;
