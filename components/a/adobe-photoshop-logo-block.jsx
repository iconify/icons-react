import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u4z4xabqd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="u4z4xabqd"/>`,
		"fallback": "streamline-logos:adobe-photoshop-logo-block",
	});
}

export default Component;
