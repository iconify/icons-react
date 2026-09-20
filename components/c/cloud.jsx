import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/axfk7i5wf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="axfk7i5wf"/>`,
		"fallback": "uil:cloud",
	});
}

export default Component;
