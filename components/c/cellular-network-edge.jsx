import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u3y9rzbfm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u3y9rzbfm"/>`,
		"fallback": "andrsrxn:cellular-network-edge",
	});
}

export default Component;
