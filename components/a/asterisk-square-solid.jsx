import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fmk1owber.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fmk1owber"/>`,
		"fallback": "mynaui:asterisk-square-solid",
	});
}

export default Component;
