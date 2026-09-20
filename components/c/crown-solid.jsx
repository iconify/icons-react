import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt73p7fso.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dt73p7fso"/>`,
		"fallback": "pixel:crown-solid",
	});
}

export default Component;
