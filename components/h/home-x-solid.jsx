import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hpozmrb_s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hpozmrb_s"/>`,
		"fallback": "mynaui:home-x-solid",
	});
}

export default Component;
