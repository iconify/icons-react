import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m0ytu37qx.css';
import '../../css/k/ka81hxn6e.css';
import '../../css/p/p6xu0eblp.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m0ytu37qx"/><path class="ka81hxn6e"/><path class="p6xu0eblp"/>`,
		"fallback": "energy-icons:images-48-bold",
	});
}

export default Component;
