import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z90c49l7l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z90c49l7l"/>`,
		"fallback": "fe:bar-chart",
	});
}

export default Component;
