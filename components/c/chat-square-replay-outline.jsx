import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ad5234bxv.css';
import '../../css/u/um_zvyb1k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ad5234bxv"/><path clip-rule="evenodd" class="um_zvyb1k"/>`,
		"fallback": "solar:chat-square-replay-outline",
	});
}

export default Component;
