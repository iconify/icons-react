import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipd8iub8r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ipd8iub8r"/>`,
		"fallback": "tabler:device-desktop-code",
	});
}

export default Component;
