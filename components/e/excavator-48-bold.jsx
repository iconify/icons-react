import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dswf7-2aj.css';
import '../../css/m/mzptizb4s.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dswf7-2aj"/><path class="mzptizb4s"/>`,
		"fallback": "energy-icons:excavator-48-bold",
	});
}

export default Component;
