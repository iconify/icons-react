import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tw08v2bng.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tw08v2bng"/>`,
		"fallback": "mage:dashboard-check",
	});
}

export default Component;
