import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fh5y2ublw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fh5y2ublw"/>`,
		"fallback": "mingcute:clock-time-fill",
	});
}

export default Component;
