import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qhog3w6ld.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="qhog3w6ld"/>`,
		"fallback": "streamline-logos:google-talk-logo-block",
	});
}

export default Component;
