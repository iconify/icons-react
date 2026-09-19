import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a122dzxck.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a122dzxck"/>`,
		"fallback": "icon-park-outline:cube-three",
	});
}

export default Component;
