import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/flen3tbdj.css';
import '../../css/x/x0g6c5tyf.css';
import '../../css/v/vj0xopb1i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="flen3tbdj"><path class="x0g6c5tyf"/><path class="vj0xopb1i"/></g>`,
		"fallback": "humbleicons:arrows",
	});
}

export default Component;
