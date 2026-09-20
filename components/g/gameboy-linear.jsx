import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/r/rnt97vblj.css';
import '../../css/j/j3gq6tqze.css';
import '../../css/m/m7y6msb9c.css';
import '../../css/i/ixis8j2zi.css';
import '../../css/h/hkzwun7yv.css';
import '../../css/b/b8_i36bih.css';
import '../../css/l/lkjawhb3k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="rnt97vblj"/><path class="j3gq6tqze"/><path class="m7y6msb9c"/><path class="ixis8j2zi"/><path class="hkzwun7yv"/><path class="b8_i36bih"/><path class="lkjawhb3k"/></g>`,
		"fallback": "solar:gameboy-linear",
	});
}

export default Component;
