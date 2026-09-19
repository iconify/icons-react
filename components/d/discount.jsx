import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/w/wbvrsl42y.css';
import '../../css/m/mp2fedcut.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="wbvrsl42y"/><path class="mp2fedcut"/></g>`,
		"fallback": "glyphs:discount",
	});
}

export default Component;
