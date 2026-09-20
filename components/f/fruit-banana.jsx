import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jyrom897p.css';
import '../../css/f/frz88sb3c.css';
import '../../css/p/pzpxu1d8p.css';
import '../../css/m/mvi55m3si.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="jyrom897p"/><path class="frz88sb3c"/><path class="pzpxu1d8p"/><path class="mvi55m3si"/></g>`,
		"fallback": "streamline-ultimate-color:fruit-banana",
	});
}

export default Component;
