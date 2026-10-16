import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zhp5-v54c.css';
import '../../css/k/ku-g4jbts.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zhp5-v54c"/><path class="ku-g4jbts"/>`,
		"fallback": "energy-icons:chart-network-48-bold",
	});
}

export default Component;
