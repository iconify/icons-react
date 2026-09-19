import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eoy6vkbrs.css';
import '../../css/b/bpq3sbcle.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eoy6vkbrs"/><path class="bpq3sbcle"/>`,
		"fallback": "bx:bx-select-multiple",
	});
}

export default Component;
