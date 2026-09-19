import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xt6wxsl1l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xt6wxsl1l"/>`,
		"fallback": "boxicons:circle-three-quarter-alt",
	});
}

export default Component;
