import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uk7og29zo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uk7og29zo"/>`,
		"fallback": "solar:folder-output-bold",
	});
}

export default Component;
