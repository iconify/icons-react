import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/apf31ib4v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="apf31ib4v"/>`,
		"fallback": "keyline-icons:film-fill",
	});
}

export default Component;
