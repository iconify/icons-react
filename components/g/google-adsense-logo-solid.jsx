import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fwpo9x45k.css';
import '../../css/x/xyg-yxntl.css';
import '../../css/y/y02rykbbe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="fwpo9x45k"/><path class="xyg-yxntl"/><path clip-rule="evenodd" class="y02rykbbe"/>`,
		"fallback": "streamline-logos:google-adsense-logo-solid",
	});
}

export default Component;
