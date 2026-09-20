import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fdw7n2bmr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fdw7n2bmr"/>`,
		"fallback": "thesvg-color:fish-shell",
	});
}

export default Component;
