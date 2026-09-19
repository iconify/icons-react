import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uh1w0u0lc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uh1w0u0lc"/>`,
		"fallback": "cbi:econt",
	});
}

export default Component;
