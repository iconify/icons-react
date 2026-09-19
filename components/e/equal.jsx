import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w364qybrz.css';

const viewBox = {"width":506,"height":614};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w364qybrz"/>`,
		"fallback": "ls:equal",
	});
}

export default Component;
