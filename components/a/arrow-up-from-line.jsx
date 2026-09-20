import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pn6l8cb6d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pn6l8cb6d"/>`,
		"fallback": "vadivam:arrow-up-from-line",
	});
}

export default Component;
