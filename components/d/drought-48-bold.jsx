import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/diqsj_bxu.css';
import '../../css/g/g0orui1mh.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="diqsj_bxu"/><path class="g0orui1mh"/>`,
		"fallback": "energy-icons:drought-48-bold",
	});
}

export default Component;
