import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vn0p08fcw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vn0p08fcw"/>`,
		"fallback": "ri:door-closed-line",
	});
}

export default Component;
