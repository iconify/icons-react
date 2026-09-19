import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w_ez2bftx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w_ez2bftx"/>`,
		"fallback": "basil:columns-solid",
	});
}

export default Component;
