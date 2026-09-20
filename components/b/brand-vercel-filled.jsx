import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/la--tvb0y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="la--tvb0y"/>`,
		"fallback": "tabler:brand-vercel-filled",
	});
}

export default Component;
