import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xaz7p-08j.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xaz7p-08j"/>`,
		"fallback": "whh:building",
	});
}

export default Component;
