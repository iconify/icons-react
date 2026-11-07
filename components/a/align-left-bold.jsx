import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/odp-njbud.css';
import '../../css/r/rxyy9rljh.css';
import '../../css/q/q5dzxvb-a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="odp-njbud"/><path class="rxyy9rljh"/><path class="q5dzxvb-a"/>`,
		"fallback": "solar:align-left-bold",
	});
}

export default Component;
