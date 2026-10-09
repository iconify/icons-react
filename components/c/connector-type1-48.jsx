import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xg-biwbzh.css';
import '../../css/n/nrf_j2jrh.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xg-biwbzh"/><path class="nrf_j2jrh"/>`,
		"fallback": "energy-icons:connector-type1-48",
	});
}

export default Component;
