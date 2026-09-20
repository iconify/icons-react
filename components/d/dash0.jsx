import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fyjzgacii.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fyjzgacii"/>`,
		"fallback": "thesvg:dash0",
	});
}

export default Component;
