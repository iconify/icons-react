import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_5v4t7wf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t_5v4t7wf"/>`,
		"fallback": "simple-icons:grubhub",
	});
}

export default Component;
