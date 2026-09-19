import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aro0gib6h.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aro0gib6h"/>`,
		"fallback": "icon-park-outline:drone",
	});
}

export default Component;
