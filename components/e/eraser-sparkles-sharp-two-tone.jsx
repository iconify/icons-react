import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/x/x5kq9ej_d.css';
import '../../css/z/zr5m9kbwl.css';
import '../../css/x/x95g1kbnv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="x5kq9ej_d"/><path class="zr5m9kbwl"/><path class="x95g1kbnv"/></g>`,
		"fallback": "keyline-icons:eraser-sparkles-sharp-two-tone",
	});
}

export default Component;
