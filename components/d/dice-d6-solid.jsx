import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c2w_62b-c.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c2w_62b-c"/>`,
		"fallback": "la:dice-d6-solid",
	});
}

export default Component;
