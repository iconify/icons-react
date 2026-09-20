import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m_ph7yb3w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m_ph7yb3w"/>`,
		"fallback": "mi:export",
	});
}

export default Component;
