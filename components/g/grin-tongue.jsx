import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jkga0ac_y.css';

const viewBox = {"width":496,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jkga0ac_y"/>`,
		"fallback": "fa-regular:grin-tongue",
	});
}

export default Component;
