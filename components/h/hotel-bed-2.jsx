import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/h/hpweukbtm.css';
import '../../css/a/awi2fxzbj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="hpweukbtm"/><path class="awi2fxzbj"/></g>`,
		"fallback": "streamline-sharp:hotel-bed-2",
	});
}

export default Component;
