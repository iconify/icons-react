import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vfiv_5beg.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vfiv_5beg"/>`,
		"fallback": "energy-icons:iceberg-48",
	});
}

export default Component;
