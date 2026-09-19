import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/x/xp18cdb9s.css';
import '../../css/w/wdgx_ps5k.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="xp18cdb9s"/><path class="wdgx_ps5k"/></g>`,
		"fallback": "glyphs:alarm-exclamation",
	});
}

export default Component;
