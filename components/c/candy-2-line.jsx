import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mfiz4io-t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mfiz4io-t"/>`,
		"fallback": "mingcute:candy-2-line",
	});
}

export default Component;
