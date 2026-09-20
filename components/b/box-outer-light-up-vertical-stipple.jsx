import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ujm9vhbmn.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ujm9vhbmn"/>`,
		"fallback": "memory:box-outer-light-up-vertical-stipple",
	});
}

export default Component;
