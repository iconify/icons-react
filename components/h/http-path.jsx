import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/szit17v3o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="szit17v3o"/>`,
		"fallback": "tabler:http-path",
	});
}

export default Component;
