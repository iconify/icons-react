import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xw0c-1bdz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xw0c-1bdz"/>`,
		"fallback": "keyline-icons:circle-square-sharp",
	});
}

export default Component;
