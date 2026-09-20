import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ncsgg5f8g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ncsgg5f8g"/>`,
		"fallback": "mynaui:bath-solid",
	});
}

export default Component;
