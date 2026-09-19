import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uqjyuob2n.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uqjyuob2n"/>`,
		"fallback": "flat-color-icons:debian",
	});
}

export default Component;
