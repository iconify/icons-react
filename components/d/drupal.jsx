import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/ru-z4wb3i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ru-z4wb3i"/>`,
		"fallback": "thesvg-color:drupal",
	});
}

export default Component;
