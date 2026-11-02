import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/avd8sacsn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="avd8sacsn"/>`,
		"fallback": "mingcute:currency-euro-2-line",
	});
}

export default Component;
