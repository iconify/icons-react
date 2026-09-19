import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xpw2p007g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xpw2p007g"/>`,
		"fallback": "iconamoon:arrow-top-left-2-bold",
	});
}

export default Component;
