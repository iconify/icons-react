import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cxjc0_bbu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cxjc0_bbu"/>`,
		"fallback": "boxicons:church-filled",
	});
}

export default Component;
