import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qk0y0vb_r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qk0y0vb_r"/>`,
		"fallback": "tabler:blob",
	});
}

export default Component;
