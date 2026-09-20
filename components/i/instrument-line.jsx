import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/abgai4bzo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="abgai4bzo"/>`,
		"fallback": "mingcute:instrument-line",
	});
}

export default Component;
