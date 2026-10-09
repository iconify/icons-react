import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t3j49yb1n.css';
import '../../css/o/o_eot77ve.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t3j49yb1n"/><path class="o_eot77ve"/>`,
		"fallback": "energy-icons:dump-truck-48",
	});
}

export default Component;
