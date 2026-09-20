import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lksd2czex.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lksd2czex"/>`,
		"fallback": "token:cusd",
	});
}

export default Component;
