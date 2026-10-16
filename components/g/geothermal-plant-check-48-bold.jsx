import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k4bkgwbdg.css';
import '../../css/d/d0q_czbpk.css';
import '../../css/j/jvzo1llrd.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k4bkgwbdg"/><path class="d0q_czbpk"/><path class="jvzo1llrd"/>`,
		"fallback": "energy-icons:geothermal-plant-check-48-bold",
	});
}

export default Component;
