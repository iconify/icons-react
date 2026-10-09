import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xy7xqk_um.css';
import '../../css/y/yyty6bb4a.css';
import '../../css/w/w5dpz7-za.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xy7xqk_um"/><path class="yyty6bb4a"/><path class="w5dpz7-za"/>`,
		"fallback": "energy-icons:grid-3x3-48-bold",
	});
}

export default Component;
