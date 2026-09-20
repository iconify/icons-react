import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dfhu18_2w.css';

const viewBox = {"width":24,"height":24,"left":-3,"top":-2};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dfhu18_2w"/>`,
		"fallback": "jam:bell-f",
	});
}

export default Component;
