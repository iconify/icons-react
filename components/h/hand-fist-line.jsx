import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cantr0bpw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cantr0bpw"/>`,
		"fallback": "mingcute:hand-fist-line",
	});
}

export default Component;
