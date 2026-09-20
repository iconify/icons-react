import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/np5g_yzxg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="np5g_yzxg"/>`,
		"fallback": "streamline-sharp:happy-face-remix",
	});
}

export default Component;
