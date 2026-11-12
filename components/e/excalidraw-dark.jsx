import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/crrcsp6jk.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="crrcsp6jk"/>`,
		"fallback": "selfhst:excalidraw-dark",
	});
}

export default Component;
