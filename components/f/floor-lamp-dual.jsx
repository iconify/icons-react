import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iauqty01z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iauqty01z"/>`,
		"fallback": "cbi:floor-lamp-dual",
	});
}

export default Component;
