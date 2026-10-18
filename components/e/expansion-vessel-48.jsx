import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/ps-cpeb9h.css';
import '../../css/e/ekaxy2bmk.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ps-cpeb9h"/><path class="ekaxy2bmk"/>`,
		"fallback": "energy-icons:expansion-vessel-48",
	});
}

export default Component;
