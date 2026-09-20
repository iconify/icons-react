import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b4bm79ayo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b4bm79ayo"/>`,
		"fallback": "mynaui:ampersand-solid",
	});
}

export default Component;
