import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i0hb-y1ml.css';
import '../../css/d/dn9k9z1wr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i0hb-y1ml"/><path class="dn9k9z1wr"/>`,
		"fallback": "bx:bx-timer",
	});
}

export default Component;
