import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_x1-jbvx.css';

const viewBox = {"width":24,"height":24,"left":-5,"top":-4.5};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t_x1-jbvx"/>`,
		"fallback": "jam:arrow-up",
	});
}

export default Component;
