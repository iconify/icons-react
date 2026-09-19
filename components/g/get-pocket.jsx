import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/knp2qb6bk.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="knp2qb6bk"/>`,
		"fallback": "fa7-brands:get-pocket",
	});
}

export default Component;
