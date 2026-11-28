import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cbc31og8i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cbc31og8i"/>`,
		"fallback": "iconaut:heart-plus-solid",
	});
}

export default Component;
