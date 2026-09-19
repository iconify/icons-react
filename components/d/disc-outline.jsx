import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w84vznkgo.css';
import '../../css/f/fb3944y_s.css';
import '../../css/a/a1bg4hbvb.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="w84vznkgo"/><circle class="fb3944y_s"/><circle class="a1bg4hbvb"/>`,
		"fallback": "famicons:disc-outline",
	});
}

export default Component;
