import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/thsmnl_1a.css';
import '../../css/h/hspx3ob0u.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="thsmnl_1a"/><path class="hspx3ob0u"/>`,
		"fallback": "energy-icons:bowling-48-bold",
	});
}

export default Component;
