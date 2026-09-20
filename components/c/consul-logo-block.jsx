import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vft-22bdh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="vft-22bdh"/>`,
		"fallback": "streamline-logos:consul-logo-block",
	});
}

export default Component;
