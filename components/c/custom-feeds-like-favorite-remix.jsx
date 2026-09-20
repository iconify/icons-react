import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vdou84mty.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="vdou84mty"/>`,
		"fallback": "streamline-sharp:custom-feeds-like-favorite-remix",
	});
}

export default Component;
