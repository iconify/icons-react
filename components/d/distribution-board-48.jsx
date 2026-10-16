import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qvyikx3qg.css';
import '../../css/f/fwh01mbsc.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qvyikx3qg"/><path class="fwh01mbsc"/>`,
		"fallback": "energy-icons:distribution-board-48",
	});
}

export default Component;
