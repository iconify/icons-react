import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uvtamnw1t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uvtamnw1t"/>`,
		"fallback": "streamline-ultimate:dual-sim-signal-4",
	});
}

export default Component;
