import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ul7b5x6-v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ul7b5x6-v"/>`,
		"fallback": "thesvg-color:a-frame",
	});
}

export default Component;
