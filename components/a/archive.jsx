import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/flen3tbdj.css';
import '../../css/l/l_jvi_-3i.css';
import '../../css/y/yclr26l0t.css';
import '../../css/t/tovsduesy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="flen3tbdj"><path class="l_jvi_-3i"/><path class="yclr26l0t"/><path class="tovsduesy"/></g>`,
		"fallback": "humbleicons:archive",
	});
}

export default Component;
