import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/ptks6rh3r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ptks6rh3r"/>`,
		"fallback": "andrsrxn:chevron-last",
	});
}

export default Component;
