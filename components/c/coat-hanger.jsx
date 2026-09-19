import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pk7chdbus.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pk7chdbus"/>`,
		"fallback": "icon-park-outline:coat-hanger",
	});
}

export default Component;
