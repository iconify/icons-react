import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/u8_lrlbzs.css';
import '../../css/w/wbeecnmpw.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="u8_lrlbzs"/><path class="wbeecnmpw"/></g>`,
		"fallback": "streamline-color:add-square",
	});
}

export default Component;
