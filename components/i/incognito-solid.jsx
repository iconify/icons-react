import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nq_dtwb3t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nq_dtwb3t"/>`,
		"fallback": "iconaut:incognito-solid",
	});
}

export default Component;
