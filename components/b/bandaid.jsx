import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l7gc5fn4t.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l7gc5fn4t"/>`,
		"fallback": "picon:bandaid",
	});
}

export default Component;
