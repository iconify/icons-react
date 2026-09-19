import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fxs6jfbzx.css';

const viewBox = {"width":768,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fxs6jfbzx"/>`,
		"fallback": "whh:brailleq",
	});
}

export default Component;
