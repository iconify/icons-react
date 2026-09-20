import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tjlq80bos.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tjlq80bos"/>`,
		"fallback": "streamline:cursor-click",
	});
}

export default Component;
