import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nma_pbbdv.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="nma_pbbdv"/>`,
		"fallback": "streamline:chat-bubble-oval-smiley-1-remix",
	});
}

export default Component;
