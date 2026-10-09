import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wupsqfb9m.css';
import '../../css/s/slmd-2blc.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wupsqfb9m"/><path class="slmd-2blc"/>`,
		"fallback": "energy-icons:hot-air-balloon-20-bold",
	});
}

export default Component;
