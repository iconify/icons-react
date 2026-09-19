import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f2gla-vtv.css';

const viewBox = {"width":576,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f2gla-vtv"/>`,
		"fallback": "fa6-solid:hand-holding-dollar",
	});
}

export default Component;
