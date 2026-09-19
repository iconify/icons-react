import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k1-czjb4j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k1-czjb4j"/>`,
		"fallback": "boxicons:cake-slice-filled",
	});
}

export default Component;
