import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/knxmof92n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="knxmof92n"/>`,
		"fallback": "thesvg-color:akaunting",
	});
}

export default Component;
