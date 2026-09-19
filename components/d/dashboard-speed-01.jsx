import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/o/o3e5lqbmj.css';
import '../../css/j/jcp3yobuq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="o3e5lqbmj"/><path class="jcp3yobuq"/></g>`,
		"fallback": "hugeicons:dashboard-speed-01",
	});
}

export default Component;
