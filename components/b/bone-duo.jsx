import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qkza45u4w.css';
import '../../css/i/iik494jlc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qkza45u4w secondary"/><path class="iik494jlc primary"/>`,
		"fallback": "iconaut:bone-duo",
	});
}

export default Component;
