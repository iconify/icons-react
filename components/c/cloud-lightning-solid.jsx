import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ua6xqgsfj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ua6xqgsfj"/>`,
		"fallback": "mynaui:cloud-lightning-solid",
	});
}

export default Component;
