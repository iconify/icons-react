import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xp_nt6zvj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xp_nt6zvj"/>`,
		"fallback": "streamline-cyber:heart-cupid",
	});
}

export default Component;
