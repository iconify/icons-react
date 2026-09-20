import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tqosdg6xy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tqosdg6xy"/>`,
		"fallback": "solar:arrow-to-top-left-linear",
	});
}

export default Component;
