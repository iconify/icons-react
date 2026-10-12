import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e-w8eybpe.css';
import '../../css/o/oi7kg_bvr.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e-w8eybpe"/><path class="oi7kg_bvr"/>`,
		"fallback": "energy-icons:bear-48-bold",
	});
}

export default Component;
