import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wb31hbg0q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wb31hbg0q"/>`,
		"fallback": "boxicons:desktop-alt",
	});
}

export default Component;
