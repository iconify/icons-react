import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wxvbekbtz.css';
import '../../css/b/brchb0v7k.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wxvbekbtz"/><path class="brchb0v7k"/>`,
		"fallback": "energy-icons:barrel-48-bold",
	});
}

export default Component;
