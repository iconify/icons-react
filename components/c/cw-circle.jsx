import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ntkigeb7i.css';

const viewBox = {"width":1000,"height":1000};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ntkigeb7i"/>`,
		"fallback": "websymbol:cw-circle",
	});
}

export default Component;
