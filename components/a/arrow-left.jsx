import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f3qcs9fwk.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f3qcs9fwk"/>`,
		"fallback": "ep:arrow-left",
	});
}

export default Component;
