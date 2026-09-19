import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mms97ybfw.css';

const viewBox = {"width":1024,"height":696};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mms97ybfw"/>`,
		"fallback": "whh:busalt",
	});
}

export default Component;
