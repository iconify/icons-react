import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sn6kv1b_o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sn6kv1b_o"/>`,
		"fallback": "noviair:desktop-tower-x",
	});
}

export default Component;
