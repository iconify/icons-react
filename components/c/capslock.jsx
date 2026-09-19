import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mf5cy-bbx.css';

const viewBox = {"width":896,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mf5cy-bbx"/>`,
		"fallback": "whh:capslock",
	});
}

export default Component;
