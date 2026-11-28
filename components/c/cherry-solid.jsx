import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f3cy-4bql.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f3cy-4bql"/>`,
		"fallback": "iconaut:cherry-solid",
	});
}

export default Component;
