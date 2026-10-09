import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q97zhzb7g.css';
import '../../css/v/v361qqj9p.css';
import '../../css/u/ufgiultbe.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q97zhzb7g"/><path class="v361qqj9p"/><path class="ufgiultbe"/>`,
		"fallback": "energy-icons:goal-20-bold",
	});
}

export default Component;
