import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vb5pocb-i.css';

const viewBox = {"width":896,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vb5pocb-i"/>`,
		"fallback": "whh:boxing",
	});
}

export default Component;
