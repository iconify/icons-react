import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/elpovvbol.css';
import '../../css/o/oc56z-biv.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="elpovvbol"/><path class="oc56z-biv"/>`,
		"fallback": "energy-icons:battery-half-48",
	});
}

export default Component;
