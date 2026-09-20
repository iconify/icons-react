import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/li_d_iu4z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="li_d_iu4z"/>`,
		"fallback": "mdi:bucket",
	});
}

export default Component;
