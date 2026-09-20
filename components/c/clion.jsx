import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h4cz4exyv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h4cz4exyv"/>`,
		"fallback": "thesvg-color:clion",
	});
}

export default Component;
