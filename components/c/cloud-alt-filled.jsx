import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rnrr2voyf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rnrr2voyf"/>`,
		"fallback": "boxicons:cloud-alt-filled",
	});
}

export default Component;
