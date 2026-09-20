import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o7-s-kbeu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o7-s-kbeu"/>`,
		"fallback": "thesvg-color:humble-bundle",
	});
}

export default Component;
