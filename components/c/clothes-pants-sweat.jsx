import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sz8-vsbax.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sz8-vsbax"/>`,
		"fallback": "icon-park-outline:clothes-pants-sweat",
	});
}

export default Component;
