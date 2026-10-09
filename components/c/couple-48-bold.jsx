import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bjm0c5bzl.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bjm0c5bzl"/>`,
		"fallback": "energy-icons:couple-48-bold",
	});
}

export default Component;
