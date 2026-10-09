import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gpcpxlb-i.css';
import '../../css/u/uspm4fblj.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gpcpxlb-i"/><path class="uspm4fblj"/>`,
		"fallback": "energy-icons:close-48",
	});
}

export default Component;
