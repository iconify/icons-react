import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o7x18sbus.css';

const viewBox = {"width":1024,"height":1025};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o7x18sbus"/>`,
		"fallback": "whh:html",
	});
}

export default Component;
