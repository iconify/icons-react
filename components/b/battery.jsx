import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rk-k9mswx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rk-k9mswx"/>`,
		"fallback": "keyline-icons:battery",
	});
}

export default Component;
