import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rmgp-hp4m.css';
import '../../css/u/ufwwjcb2j.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rmgp-hp4m"/><path class="ufwwjcb2j"/>`,
		"fallback": "energy-icons:house-chart-20-bold",
	});
}

export default Component;
