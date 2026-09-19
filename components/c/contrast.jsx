import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uxonpi7xw.css';

const viewBox = {"width":750,"height":850};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uxonpi7xw"/>`,
		"fallback": "il:contrast",
	});
}

export default Component;
