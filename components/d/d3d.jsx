import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i-w3vmb5c.css';
import '../../css/m/m97pomy2l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i-w3vmb5c"/><path clip-rule="evenodd" class="m97pomy2l"/>`,
		"fallback": "token:d3d",
	});
}

export default Component;
