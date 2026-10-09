import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r2nbzfjyr.css';
import '../../css/e/e-kvk2brc.css';
import '../../css/q/q7lsyebqx.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r2nbzfjyr"/><path class="e-kvk2brc"/><path class="q7lsyebqx"/>`,
		"fallback": "energy-icons:hammock-48-bold",
	});
}

export default Component;
