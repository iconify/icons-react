import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/s/su4rfkb3h.css';
import '../../css/l/lm-ms7bjf.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="su4rfkb3h"/><path class="lm-ms7bjf"/></g>`,
		"fallback": "glyphs:crown",
	});
}

export default Component;
