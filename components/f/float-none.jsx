import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uoz0d_b1b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uoz0d_b1b"/>`,
		"fallback": "tabler:float-none",
	});
}

export default Component;
