import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/itrxtc5lt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="itrxtc5lt"/>`,
		"fallback": "token:fxs",
	});
}

export default Component;
