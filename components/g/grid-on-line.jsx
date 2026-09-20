import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_594-9bz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t_594-9bz"/>`,
		"fallback": "si:grid-on-line",
	});
}

export default Component;
