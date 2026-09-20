import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/diko8da2p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="diko8da2p"/>`,
		"fallback": "streamline-logos:instagram-logo-1-block",
	});
}

export default Component;
