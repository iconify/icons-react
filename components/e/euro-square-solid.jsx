import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k8ctk4-fb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k8ctk4-fb"/>`,
		"fallback": "mynaui:euro-square-solid",
	});
}

export default Component;
