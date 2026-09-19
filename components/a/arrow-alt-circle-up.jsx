import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wj-g3nbgg.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wj-g3nbgg"/>`,
		"fallback": "fa-regular:arrow-alt-circle-up",
	});
}

export default Component;
