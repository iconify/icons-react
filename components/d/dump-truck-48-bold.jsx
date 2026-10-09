import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/axlm26blc.css';
import '../../css/t/taruh-bis.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="axlm26blc"/><path class="taruh-bis"/>`,
		"fallback": "energy-icons:dump-truck-48-bold",
	});
}

export default Component;
