import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tax5f0byn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tax5f0byn"/>`,
		"fallback": "token:bond",
	});
}

export default Component;
