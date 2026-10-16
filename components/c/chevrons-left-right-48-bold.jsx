import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/omvg85bed.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="omvg85bed"/>`,
		"fallback": "energy-icons:chevrons-left-right-48-bold",
	});
}

export default Component;
