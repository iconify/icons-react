import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ex_pl8bro.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ex_pl8bro"/>`,
		"fallback": "fa6-solid:gopuram",
	});
}

export default Component;
