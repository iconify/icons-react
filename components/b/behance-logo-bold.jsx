import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wqvu_ab2n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wqvu_ab2n"/>`,
		"fallback": "streamline-ultimate:behance-logo-bold",
	});
}

export default Component;
