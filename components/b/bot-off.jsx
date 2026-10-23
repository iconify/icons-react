import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f1icufbmw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f1icufbmw"/>`,
		"fallback": "vadivam:bot-off",
	});
}

export default Component;
