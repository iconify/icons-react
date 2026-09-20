import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gg36jbbwg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gg36jbbwg"/>`,
		"fallback": "streamline-logos:google-play-logo",
	});
}

export default Component;
