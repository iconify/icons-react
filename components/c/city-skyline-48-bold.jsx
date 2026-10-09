import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uw5ycab-f.css';
import '../../css/o/otkch_brn.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uw5ycab-f"/><path class="otkch_brn"/>`,
		"fallback": "energy-icons:city-skyline-48-bold",
	});
}

export default Component;
