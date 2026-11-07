import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rfpn6w7ca.css';
import '../../css/o/o-74h_bnv.css';
import '../../css/a/az8lz0bfc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rfpn6w7ca"/><path class="o-74h_bnv"/><path class="az8lz0bfc"/>`,
		"fallback": "solar:chat-square-line-bold-duotone",
	});
}

export default Component;
