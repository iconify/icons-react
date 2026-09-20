import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rn3w0p46b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rn3w0p46b"/>`,
		"fallback": "mdi:blinds-horizontal-closed",
	});
}

export default Component;
