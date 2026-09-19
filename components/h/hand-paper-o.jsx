import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q7clc9b5y.css';

const viewBox = {"width":1632,"height":1792};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q7clc9b5y"/>`,
		"fallback": "fa:hand-paper-o",
	});
}

export default Component;
