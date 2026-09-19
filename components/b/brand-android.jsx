import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dnoynmb2q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dnoynmb2q"/>`,
		"fallback": "humbleicons:brand-android",
	});
}

export default Component;
