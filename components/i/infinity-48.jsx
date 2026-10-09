import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/ttpm_-b3x.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ttpm_-b3x"/>`,
		"fallback": "energy-icons:infinity-48",
	});
}

export default Component;
