import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vlznznb0o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vlznznb0o"/>`,
		"fallback": "boxicons:circle-half-filled",
	});
}

export default Component;
