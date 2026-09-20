import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yi0c9ccqg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yi0c9ccqg"/>`,
		"fallback": "keyline-icons:airplay-sharp",
	});
}

export default Component;
