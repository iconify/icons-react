import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qs4pb60ps.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qs4pb60ps"/>`,
		"fallback": "reicon:box-3-filled",
	});
}

export default Component;
