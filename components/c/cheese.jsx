import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pk68rxb5n.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pk68rxb5n"/>`,
		"fallback": "fa7-solid:cheese",
	});
}

export default Component;
