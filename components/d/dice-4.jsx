import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e2c66yxnx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e2c66yxnx"/>`,
		"fallback": "noviair:dice-4",
	});
}

export default Component;
