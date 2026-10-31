import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ydd4rb9ai.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ydd4rb9ai"/>`,
		"fallback": "withicons:corner-down-left-gloss",
	});
}

export default Component;
