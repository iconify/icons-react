import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m492rfbss.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m492rfbss"/>`,
		"fallback": "withicons:alert-triangle-solid",
	});
}

export default Component;
