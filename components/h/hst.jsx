import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ob6w07hra.css';
import '../../css/w/webixmbuy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ob6w07hra"/><path clip-rule="evenodd" class="webixmbuy"/>`,
		"fallback": "token:hst",
	});
}

export default Component;
