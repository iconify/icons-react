import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x-e95ie2p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x-e95ie2p"/>`,
		"fallback": "andrsrxn:gif",
	});
}

export default Component;
