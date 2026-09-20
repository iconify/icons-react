import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v8pr8sb2v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v8pr8sb2v"/>`,
		"fallback": "mynaui:activity-solid",
	});
}

export default Component;
