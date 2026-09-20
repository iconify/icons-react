import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cbo6n2bdn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cbo6n2bdn"/>`,
		"fallback": "simple-icons:hibob",
	});
}

export default Component;
