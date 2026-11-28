import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uejpnu0db.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uejpnu0db"/>`,
		"fallback": "iconaut:brace-left-solid",
	});
}

export default Component;
