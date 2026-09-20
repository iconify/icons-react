import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ck5ihzb4w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ck5ihzb4w"/>`,
		"fallback": "tabler:device-desktop-cog",
	});
}

export default Component;
