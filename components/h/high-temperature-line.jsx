import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/axz6idbfc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="axz6idbfc"/>`,
		"fallback": "mingcute:high-temperature-line",
	});
}

export default Component;
