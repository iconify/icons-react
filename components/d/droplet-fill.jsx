import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jt_os_b4b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jt_os_b4b"/>`,
		"fallback": "keyline-icons:droplet-fill",
	});
}

export default Component;
