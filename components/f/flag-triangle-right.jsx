import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dm-xv_9uy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dm-xv_9uy"/>`,
		"fallback": "vadivam:flag-triangle-right",
	});
}

export default Component;
