import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a5zb4-b3y.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a5zb4-b3y"/>`,
		"fallback": "icon-park-outline:clothes-gloves-two",
	});
}

export default Component;
