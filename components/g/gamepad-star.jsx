import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ien1wxbvu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ien1wxbvu"/>`,
		"fallback": "noviair:gamepad-star",
	});
}

export default Component;
