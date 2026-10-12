import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l7d8ty_6p.css';
import '../../css/e/e8_qdzh7e.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l7d8ty_6p"/><path class="e8_qdzh7e"/>`,
		"fallback": "energy-icons:bear-48",
	});
}

export default Component;
