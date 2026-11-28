import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hqxx1w4em.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hqxx1w4em"/>`,
		"fallback": "iconaut:ghost-solid",
	});
}

export default Component;
