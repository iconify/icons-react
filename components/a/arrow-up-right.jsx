import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w7-2_ubzq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w7-2_ubzq"/>`,
		"fallback": "vadivam:arrow-up-right",
	});
}

export default Component;
