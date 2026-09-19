import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3qnx6z1d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="l3qnx6z1d"/>`,
		"fallback": "griddy-icons:checkbox",
	});
}

export default Component;
