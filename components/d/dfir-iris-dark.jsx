import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qf3xb6b8z.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qf3xb6b8z"/>`,
		"fallback": "selfhst:dfir-iris-dark",
	});
}

export default Component;
