import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p05qn7boj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p05qn7boj"/>`,
		"fallback": "thesvg:apache-cordova",
	});
}

export default Component;
