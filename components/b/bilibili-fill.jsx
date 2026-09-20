import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hvia491xp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hvia491xp"/>`,
		"fallback": "ri:bilibili-fill",
	});
}

export default Component;
