import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g16uogwjc.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="g16uogwjc"/>`,
		"fallback": "streamline:cloud-warning-solid",
	});
}

export default Component;
