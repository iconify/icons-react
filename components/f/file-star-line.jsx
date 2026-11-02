import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pcrrv06ip.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pcrrv06ip"/>`,
		"fallback": "mingcute:file-star-line",
	});
}

export default Component;
