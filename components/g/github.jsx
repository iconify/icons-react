import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/olg2t05yp.css';

const viewBox = {"width":768,"height":666};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="olg2t05yp"/>`,
		"fallback": "ls:github",
	});
}

export default Component;
