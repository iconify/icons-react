import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rhl9vvbck.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rhl9vvbck"/>`,
		"fallback": "boxicons:finger-right-filled",
	});
}

export default Component;
