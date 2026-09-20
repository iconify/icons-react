import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/idebgla5y.css';
import '../../css/y/y16o0oyvc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="idebgla5y"/><path class="y16o0oyvc"/>`,
		"fallback": "tdesign:image-filled",
	});
}

export default Component;
