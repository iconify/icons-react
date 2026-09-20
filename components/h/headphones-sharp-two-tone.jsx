import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/t/th2y3uo2c.css';
import '../../css/h/h7cptgbny.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="th2y3uo2c"/><path class="h7cptgbny"/></g>`,
		"fallback": "keyline-icons:headphones-sharp-two-tone",
	});
}

export default Component;
