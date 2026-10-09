import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uxvnz_b5x.css';
import '../../css/l/ln8bypb4j.css';
import '../../css/r/rupaucvzi.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uxvnz_b5x"/><path class="ln8bypb4j"/><path class="rupaucvzi"/>`,
		"fallback": "energy-icons:house-heat-pump-48-bold",
	});
}

export default Component;
