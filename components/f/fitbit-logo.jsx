import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pdxc7ob4h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pdxc7ob4h"/>`,
		"fallback": "streamline-logos:fitbit-logo",
	});
}

export default Component;
