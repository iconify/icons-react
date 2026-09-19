import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m_mj50i8d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m_mj50i8d"/>`,
		"fallback": "bx:bxl-digg",
	});
}

export default Component;
