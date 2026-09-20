import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x4t2n67if.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x4t2n67if"/>`,
		"fallback": "mynaui:heart-slash-solid",
	});
}

export default Component;
