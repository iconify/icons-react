import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eqmrd89er.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eqmrd89er"/>`,
		"fallback": "token:get",
	});
}

export default Component;
