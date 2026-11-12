import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nxb0y9l6v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nxb0y9l6v"/>`,
		"fallback": "tabler:bookmark-dollar",
	});
}

export default Component;
