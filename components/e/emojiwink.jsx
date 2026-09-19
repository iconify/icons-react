import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/exj4j4izy.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="exj4j4izy"/>`,
		"fallback": "whh:emojiwink",
	});
}

export default Component;
