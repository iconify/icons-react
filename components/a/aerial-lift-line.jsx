import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/orqdep5yw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="orqdep5yw"/>`,
		"fallback": "mingcute:aerial-lift-line",
	});
}

export default Component;
