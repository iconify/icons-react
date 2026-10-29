import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zduqu9ruz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zduqu9ruz"/>`,
		"fallback": "vadivam:arrow-big-down",
	});
}

export default Component;
