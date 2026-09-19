import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ds2fz5baz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ds2fz5baz"/>`,
		"fallback": "hugeicons:content-writing",
	});
}

export default Component;
