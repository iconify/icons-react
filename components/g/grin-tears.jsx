import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u2fp4nqfu.css';

const viewBox = {"width":640,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u2fp4nqfu"/>`,
		"fallback": "fa-solid:grin-tears",
	});
}

export default Component;
