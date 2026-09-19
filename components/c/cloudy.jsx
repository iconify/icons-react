import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/m/muupg2b0k.css';
import '../../css/t/tqwqjm_wa.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="muupg2b0k"/><path class="tqwqjm_wa"/></g>`,
		"fallback": "glyphs:cloudy",
	});
}

export default Component;
