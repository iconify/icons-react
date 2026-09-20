import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/agp85jbls.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="agp85jbls"/>`,
		"fallback": "thesvg-color:cadillac",
	});
}

export default Component;
