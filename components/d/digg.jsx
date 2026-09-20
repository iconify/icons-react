import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y39j1xb_n.css';

const viewBox = {"width":24,"height":24,"left":-2,"top":-4.5};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y39j1xb_n"/>`,
		"fallback": "jam:digg",
	});
}

export default Component;
