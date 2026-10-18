import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wk4xhy-nc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wk4xhy-nc"/>`,
		"fallback": "vadivam:battery-medium",
	});
}

export default Component;
