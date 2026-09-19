import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a_3n_ebhb.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a_3n_ebhb"/>`,
		"fallback": "charm:gamepad",
	});
}

export default Component;
