import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/br0onz2hl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="br0onz2hl"/>`,
		"fallback": "mingcute:align-center-line",
	});
}

export default Component;
