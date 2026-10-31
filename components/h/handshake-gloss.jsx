import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u33woviru.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u33woviru"/>`,
		"fallback": "withicons:handshake-gloss",
	});
}

export default Component;
