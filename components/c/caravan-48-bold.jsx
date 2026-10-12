import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yx-x57btp.css';
import '../../css/b/b2241hbqd.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yx-x57btp"/><path class="b2241hbqd"/>`,
		"fallback": "energy-icons:caravan-48-bold",
	});
}

export default Component;
