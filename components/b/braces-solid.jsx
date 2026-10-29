import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cg1hkqrlf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cg1hkqrlf"/>`,
		"fallback": "withicons:braces-solid",
	});
}

export default Component;
