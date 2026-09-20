import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ekqu4_gnq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ekqu4_gnq"/>`,
		"fallback": "mynaui:arrow-big-left-solid",
	});
}

export default Component;
