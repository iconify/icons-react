import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jijy0rbpw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="jijy0rbpw"/>`,
		"fallback": "mingcute:hand-finger-2-fill",
	});
}

export default Component;
