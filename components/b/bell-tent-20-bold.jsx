import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/syjjg5boi.css';
import '../../css/q/qb-anoa-e.css';
import '../../css/l/l4lb-ym4l.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="syjjg5boi"/><path class="qb-anoa-e"/><path class="l4lb-ym4l"/>`,
		"fallback": "energy-icons:bell-tent-20-bold",
	});
}

export default Component;
