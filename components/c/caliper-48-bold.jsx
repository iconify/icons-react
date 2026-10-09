import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pm2leab2g.css';
import '../../css/y/yg7y-7bze.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pm2leab2g"/><path class="yg7y-7bze"/>`,
		"fallback": "energy-icons:caliper-48-bold",
	});
}

export default Component;
