import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dyc-o5rhj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dyc-o5rhj"/>`,
		"fallback": "mynaui:a-arrow-down-solid",
	});
}

export default Component;
