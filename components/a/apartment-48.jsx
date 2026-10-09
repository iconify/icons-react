import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y-0gtbbyk.css';
import '../../css/n/nvnghdcdo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y-0gtbbyk"/><path class="nvnghdcdo"/>`,
		"fallback": "energy-icons:apartment-48",
	});
}

export default Component;
