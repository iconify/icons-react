import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/ll0cyjbpi.css';

const viewBox = {"width":24,"height":24,"left":-1.5,"top":-1.5};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ll0cyjbpi"/>`,
		"fallback": "jam:attachment",
	});
}

export default Component;
