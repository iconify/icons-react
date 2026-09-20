import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bj-s-r_3p.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bj-s-r_3p"/>`,
		"fallback": "la:igloo",
	});
}

export default Component;
