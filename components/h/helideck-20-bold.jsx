import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nwbb8x53o.css';
import '../../css/m/mufw90bzh.css';
import '../../css/p/pvxhf4bgm.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nwbb8x53o"/><path class="mufw90bzh"/><path class="pvxhf4bgm"/>`,
		"fallback": "energy-icons:helideck-20-bold",
	});
}

export default Component;
