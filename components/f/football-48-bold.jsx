import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n2neunb3u.css';
import '../../css/d/dmc0je7pk.css';
import '../../css/d/dc1g2de2c.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n2neunb3u"/><path class="dmc0je7pk"/><path class="dc1g2de2c"/>`,
		"fallback": "energy-icons:football-48-bold",
	});
}

export default Component;
