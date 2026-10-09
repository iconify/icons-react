import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ysmjyxbxr.css';
import '../../css/a/a3h2qmbcp.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ysmjyxbxr"/><path class="a3h2qmbcp"/>`,
		"fallback": "energy-icons:dam-48-bold",
	});
}

export default Component;
