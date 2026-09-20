import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hwvx4yb-p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hwvx4yb-p"/>`,
		"fallback": "mdi:google-circles-group",
	});
}

export default Component;
