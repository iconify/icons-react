import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iv164ob3o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iv164ob3o"/>`,
		"fallback": "mynaui:align-right-solid",
	});
}

export default Component;
