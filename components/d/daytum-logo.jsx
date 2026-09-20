import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h01tyzbfu.css';
import '../../css/t/ts9smeb3v.css';
import '../../css/v/v7x4ucb2s.css';
import '../../css/m/mg7qgd5-h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="h01tyzbfu"><path class="ts9smeb3v"/><path class="v7x4ucb2s"/><path class="mg7qgd5-h"/></g>`,
		"fallback": "streamline-logos:daytum-logo",
	});
}

export default Component;
