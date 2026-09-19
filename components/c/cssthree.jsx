import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i-_12jovm.css';

const viewBox = {"width":896,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i-_12jovm"/>`,
		"fallback": "whh:cssthree",
	});
}

export default Component;
