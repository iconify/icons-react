import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w07o7rb0l.css';
import '../../css/z/z4o_8eb_q.css';
import '../../css/y/yvyc8v67g.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w07o7rb0l"/><path class="z4o_8eb_q"/><path class="yvyc8v67g"/>`,
		"fallback": "energy-icons:archery-20-bold",
	});
}

export default Component;
