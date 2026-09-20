import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/boh9b_bqr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="boh9b_bqr"/>`,
		"fallback": "si:info-fill",
	});
}

export default Component;
