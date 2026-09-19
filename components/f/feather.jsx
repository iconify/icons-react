import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wezqo-b5m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wezqo-b5m"/>`,
		"fallback": "feather:feather",
	});
}

export default Component;
