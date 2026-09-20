import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hi44x2b4k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="hi44x2b4k"/>`,
		"fallback": "reicon:code-scan",
	});
}

export default Component;
