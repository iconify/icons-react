import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rkpyk6brm.css';
import '../../css/f/f61frvbiv.css';
import '../../css/l/lknw7jshi.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rkpyk6brm"/><path class="f61frvbiv"/><path class="lknw7jshi"/>`,
		"fallback": "energy-icons:geothermal-plant-48-bold",
	});
}

export default Component;
