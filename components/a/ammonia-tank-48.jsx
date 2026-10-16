import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y2ysngb0i.css';
import '../../css/e/ejksd6blo.css';
import '../../css/g/gszeo4h3u.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y2ysngb0i"/><path class="ejksd6blo"/><path class="gszeo4h3u"/>`,
		"fallback": "energy-icons:ammonia-tank-48",
	});
}

export default Component;
