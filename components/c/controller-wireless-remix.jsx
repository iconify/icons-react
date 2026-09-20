import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w3nf8db3j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="w3nf8db3j"/>`,
		"fallback": "streamline-sharp:controller-wireless-remix",
	});
}

export default Component;
