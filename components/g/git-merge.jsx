import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tzoqvv8_o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tzoqvv8_o"/>`,
		"fallback": "mynaui:git-merge",
	});
}

export default Component;
