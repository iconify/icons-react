import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/ljxy0pbpp.css';
import '../../css/t/t2peqlb2m.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ljxy0pbpp"/><path class="t2peqlb2m"/>`,
		"fallback": "energy-icons:contract-48",
	});
}

export default Component;
