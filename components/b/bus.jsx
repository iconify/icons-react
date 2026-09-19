import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/x/xp05upb1o.css';
import '../../css/o/o07uw3b-m.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="xp05upb1o"/><path class="o07uw3b-m"/></g>`,
		"fallback": "glyphs:bus",
	});
}

export default Component;
