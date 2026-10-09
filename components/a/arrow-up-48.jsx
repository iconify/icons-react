import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/df1n7oboy.css';
import '../../css/z/z6uccbt4k.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="df1n7oboy"/><path class="z6uccbt4k"/>`,
		"fallback": "energy-icons:arrow-up-48",
	});
}

export default Component;
