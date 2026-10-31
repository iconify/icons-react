import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wemnrpc4e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wemnrpc4e"/>`,
		"fallback": "coolicons:database-search-corner-fill-round",
	});
}

export default Component;
