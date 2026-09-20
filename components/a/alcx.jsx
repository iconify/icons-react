import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ueoqvskua.css';
import '../../css/w/wzzwvy7vs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ueoqvskua"/><path class="wzzwvy7vs"/>`,
		"fallback": "token:alcx",
	});
}

export default Component;
