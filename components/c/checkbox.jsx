import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rybd2si7u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rybd2si7u"/>`,
		"fallback": "ci:checkbox",
	});
}

export default Component;
