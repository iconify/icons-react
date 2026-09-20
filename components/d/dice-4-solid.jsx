import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c43qe1bso.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c43qe1bso"/>`,
		"fallback": "mynaui:dice-4-solid",
	});
}

export default Component;
