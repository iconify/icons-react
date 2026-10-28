import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ig9ix3tip.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ig9ix3tip"/>`,
		"fallback": "vadivam:arrow-down-from-line",
	});
}

export default Component;
