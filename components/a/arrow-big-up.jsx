import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pxzk1vbdk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pxzk1vbdk"/>`,
		"fallback": "vadivam:arrow-big-up",
	});
}

export default Component;
