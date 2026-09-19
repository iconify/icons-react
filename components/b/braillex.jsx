import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rqxjurbtg.css';

const viewBox = {"width":768,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rqxjurbtg"/>`,
		"fallback": "whh:braillex",
	});
}

export default Component;
