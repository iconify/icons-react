import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gg7n252at.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gg7n252at"/>`,
		"fallback": "icon-park-outline:fist",
	});
}

export default Component;
