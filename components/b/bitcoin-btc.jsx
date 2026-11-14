import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tcvbmhb6p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tcvbmhb6p"/>`,
		"fallback": "cbi:bitcoin-btc",
	});
}

export default Component;
