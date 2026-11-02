import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mqx115b0d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mqx115b0d"/>`,
		"fallback": "mingcute:gallery-vertical-line",
	});
}

export default Component;
