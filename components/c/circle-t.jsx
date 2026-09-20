import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e-6_ylk_v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e-6_ylk_v"/>`,
		"fallback": "tabler:circle-t",
	});
}

export default Component;
