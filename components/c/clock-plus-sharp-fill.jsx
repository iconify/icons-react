import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/i/i5kj9-bcx.css';
import '../../css/e/etf2xkbvu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path clip-rule="evenodd" class="i5kj9-bcx"/><path class="etf2xkbvu"/></g>`,
		"fallback": "keyline-icons:clock-plus-sharp-fill",
	});
}

export default Component;
