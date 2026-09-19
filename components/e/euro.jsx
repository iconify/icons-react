import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/ltpgq5bkn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ltpgq5bkn"/>`,
		"fallback": "bx:euro",
	});
}

export default Component;
