import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/odq-7dbym.css';

const viewBox = {"width":768,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="odq-7dbym"/>`,
		"fallback": "whh:brailleone",
	});
}

export default Component;
