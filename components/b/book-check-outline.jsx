import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dlbhu4b3j.css';
import '../../css/v/vcstvubhv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dlbhu4b3j"/><path clip-rule="evenodd" class="vcstvubhv"/>`,
		"fallback": "basil:book-check-outline",
	});
}

export default Component;
