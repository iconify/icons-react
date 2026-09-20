import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/flen3tbdj.css';
import '../../css/j/jzvf1uujd.css';
import '../../css/t/tp_z2nbga.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="flen3tbdj"><path class="jzvf1uujd"/><path class="tp_z2nbga"/></g>`,
		"fallback": "lets-icons:color-picker",
	});
}

export default Component;
