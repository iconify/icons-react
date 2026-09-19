import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/e/esofr1bdp.css';
import '../../css/x/xza4_mlzs.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="esofr1bdp"/><path class="xza4_mlzs"/></g>`,
		"fallback": "glyphs:alarm-clock",
	});
}

export default Component;
