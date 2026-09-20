import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m5nb-51af.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="m5nb-51af"/>`,
		"fallback": "streamline-logos:digg-logo-block",
	});
}

export default Component;
