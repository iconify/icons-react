import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kr0fxhktn.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kr0fxhktn"/>`,
		"fallback": "uiw:caret-up",
	});
}

export default Component;
