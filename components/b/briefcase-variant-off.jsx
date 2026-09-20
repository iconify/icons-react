import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eb4kb1uwx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eb4kb1uwx"/>`,
		"fallback": "mdi:briefcase-variant-off",
	});
}

export default Component;
