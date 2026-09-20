import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/akkbdcc0i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="akkbdcc0i"/>`,
		"fallback": "tdesign:component-layout-filled",
	});
}

export default Component;
