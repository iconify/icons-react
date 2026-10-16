import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e9ka3cc1p.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e9ka3cc1p"/>`,
		"fallback": "energy-icons:infrared-panel-48-bold",
	});
}

export default Component;
