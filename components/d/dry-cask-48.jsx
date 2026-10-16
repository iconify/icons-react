import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uklt71bum.css';
import '../../css/o/okvl3ohva.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uklt71bum"/><path class="okvl3ohva"/>`,
		"fallback": "energy-icons:dry-cask-48",
	});
}

export default Component;
