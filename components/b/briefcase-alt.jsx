import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fbpqofk4w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fbpqofk4w"/>`,
		"fallback": "uil:briefcase-alt",
	});
}

export default Component;
