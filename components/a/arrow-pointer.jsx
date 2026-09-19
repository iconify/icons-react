import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rp_b9ccaj.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rp_b9ccaj"/>`,
		"fallback": "fa7-solid:arrow-pointer",
	});
}

export default Component;
