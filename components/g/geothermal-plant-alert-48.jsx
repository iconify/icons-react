import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v5a2fp72m.css';
import '../../css/m/mtcc90b-l.css';
import '../../css/i/ikpbwe38b.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v5a2fp72m"/><path class="mtcc90b-l"/><path class="ikpbwe38b"/>`,
		"fallback": "energy-icons:geothermal-plant-alert-48",
	});
}

export default Component;
