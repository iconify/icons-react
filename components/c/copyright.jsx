import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ynhhlqb6o.css';
import '../../css/h/hu5x0zz5p.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="ynhhlqb6o"/><path class="hu5x0zz5p"/>`,
		"fallback": "flat-color-icons:copyright",
	});
}

export default Component;
