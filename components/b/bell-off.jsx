import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pn4a9db6m.css';

const viewBox = {"width":24,"height":24,"left":-2,"top":-1.5};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pn4a9db6m"/>`,
		"fallback": "jam:bell-off",
	});
}

export default Component;
