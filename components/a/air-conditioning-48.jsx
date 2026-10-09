import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m3-w5po8z.css';
import '../../css/k/kyspg4brs.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m3-w5po8z"/><path class="kyspg4brs"/>`,
		"fallback": "energy-icons:air-conditioning-48",
	});
}

export default Component;
