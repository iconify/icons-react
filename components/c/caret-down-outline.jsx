import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/teucm-ivn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="teucm-ivn"/>`,
		"fallback": "mdi:caret-down-outline",
	});
}

export default Component;
