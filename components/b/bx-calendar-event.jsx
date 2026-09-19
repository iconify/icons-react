import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ix75i-bma.css';
import '../../css/m/m5m_kacnk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ix75i-bma"/><path class="m5m_kacnk"/>`,
		"fallback": "bx:bx-calendar-event",
	});
}

export default Component;
