import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vjod6gb0n.css';
import '../../css/r/r1303ebjq.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vjod6gb0n"/><path class="r1303ebjq"/>`,
		"fallback": "energy-icons:carbon-budget-48-bold",
	});
}

export default Component;
