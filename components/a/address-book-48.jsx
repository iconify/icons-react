import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n9tgqub2z.css';
import '../../css/l/l8g3b28gy.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n9tgqub2z"/><path class="l8g3b28gy"/>`,
		"fallback": "energy-icons:address-book-48",
	});
}

export default Component;
