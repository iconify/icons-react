import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e9r_w_bnl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e9r_w_bnl"/>`,
		"fallback": "mdi:file-cog-outline",
	});
}

export default Component;
