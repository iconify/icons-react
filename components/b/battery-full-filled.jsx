import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kg6q7_b9p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="kg6q7_b9p"/>`,
		"fallback": "reicon:battery-full-filled",
	});
}

export default Component;
