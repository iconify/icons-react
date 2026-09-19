import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p_hk-mzcp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p_hk-mzcp"/>`,
		"fallback": "boxicons:arrow-to-left-filled",
	});
}

export default Component;
