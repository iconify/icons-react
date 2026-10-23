import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/h/h3ybrnbnd.css';
import '../../css/c/c23ppiban.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="h3ybrnbnd"/><path class="c23ppiban"/></g>`,
		"fallback": "vadivam:fan",
	});
}

export default Component;
