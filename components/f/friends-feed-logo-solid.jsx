import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f4z_drcgj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f4z_drcgj"/>`,
		"fallback": "streamline-logos:friends-feed-logo-solid",
	});
}

export default Component;
