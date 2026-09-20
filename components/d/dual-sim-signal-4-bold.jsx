import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fckfpbbza.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="fckfpbbza"/>`,
		"fallback": "streamline-ultimate:dual-sim-signal-4-bold",
	});
}

export default Component;
