import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/glf6v1jiu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="glf6v1jiu"/>`,
		"fallback": "fontisto:calendar",
	});
}

export default Component;
