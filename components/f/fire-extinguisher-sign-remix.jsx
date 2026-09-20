import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hym1jybwd.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="hym1jybwd"/>`,
		"fallback": "streamline:fire-extinguisher-sign-remix",
	});
}

export default Component;
