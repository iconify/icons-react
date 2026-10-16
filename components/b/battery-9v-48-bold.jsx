import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iyvijplsq.css';
import '../../css/y/yoow9pgmz.css';
import '../../css/k/k-osxnv8s.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iyvijplsq"/><path class="yoow9pgmz"/><path class="k-osxnv8s"/>`,
		"fallback": "energy-icons:battery-9v-48-bold",
	});
}

export default Component;
