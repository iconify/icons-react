import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uralp8bne.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uralp8bne"/>`,
		"fallback": "andrsrxn:arrows-up-from-line",
	});
}

export default Component;
