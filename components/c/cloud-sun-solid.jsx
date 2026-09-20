import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_w_2druv.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t_w_2druv"/>`,
		"fallback": "la:cloud-sun-solid",
	});
}

export default Component;
