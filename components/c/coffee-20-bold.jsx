import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lsm6o3u7u.css';
import '../../css/u/uw4qzh0ap.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lsm6o3u7u"/><path class="uw4qzh0ap"/>`,
		"fallback": "energy-icons:coffee-20-bold",
	});
}

export default Component;
