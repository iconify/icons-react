import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y69hv9biv.css';
import '../../css/r/ro3kpsbzm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y69hv9biv"/><path class="ro3kpsbzm"/>`,
		"fallback": "octicon:alert-24",
	});
}

export default Component;
