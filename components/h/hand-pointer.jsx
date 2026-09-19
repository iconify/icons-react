import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lcdx9-l-j.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lcdx9-l-j"/>`,
		"fallback": "fa6-solid:hand-pointer",
	});
}

export default Component;
