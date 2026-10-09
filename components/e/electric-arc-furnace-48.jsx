import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lazjyk96p.css';
import '../../css/z/z8apakboq.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lazjyk96p"/><path class="z8apakboq"/>`,
		"fallback": "energy-icons:electric-arc-furnace-48",
	});
}

export default Component;
