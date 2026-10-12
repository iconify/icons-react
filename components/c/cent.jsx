import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xkg-1fb6o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xkg-1fb6o"/>`,
		"fallback": "andrsrxn:cent",
	});
}

export default Component;
