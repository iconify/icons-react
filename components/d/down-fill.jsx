import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jvgxxmb3x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jvgxxmb3x"/>`,
		"fallback": "mingcute:down-fill",
	});
}

export default Component;
