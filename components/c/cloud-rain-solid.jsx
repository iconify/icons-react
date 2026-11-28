import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/ty7jkabah.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ty7jkabah"/>`,
		"fallback": "iconaut:cloud-rain-solid",
	});
}

export default Component;
