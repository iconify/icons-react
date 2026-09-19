import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tb1dfb9ww.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tb1dfb9ww"/>`,
		"fallback": "icon-park-outline:clothes-sweater",
	});
}

export default Component;
