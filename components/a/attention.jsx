import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a9g6vrjtx.css';

const viewBox = {"width":1113,"height":1000};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a9g6vrjtx"/>`,
		"fallback": "websymbol:attention",
	});
}

export default Component;
