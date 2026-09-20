import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mov6m_bbr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mov6m_bbr"/>`,
		"fallback": "pixelarticons:calendar-weekend",
	});
}

export default Component;
