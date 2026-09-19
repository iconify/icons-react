import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u1zr6vb5v.css';
import '../../css/e/ee-m9bcyn.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u1zr6vb5v"/><path class="ee-m9bcyn"/>`,
		"fallback": "carbon:clean",
	});
}

export default Component;
