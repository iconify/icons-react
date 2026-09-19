import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/asf522r5b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="asf522r5b"/>`,
		"fallback": "hugeicons:check-line",
	});
}

export default Component;
