import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nxju_n3um.css';
import '../../css/f/fow8b5buk.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nxju_n3um"/><path class="fow8b5buk"/>`,
		"fallback": "energy-icons:heatwave-48",
	});
}

export default Component;
