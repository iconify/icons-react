import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_3ujp46z.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t_3ujp46z"/>`,
		"fallback": "la:comments-dollar-solid",
	});
}

export default Component;
