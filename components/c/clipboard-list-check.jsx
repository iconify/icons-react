import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xx1b5ql4b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xx1b5ql4b"/>`,
		"fallback": "noviair:clipboard-list-check",
	});
}

export default Component;
