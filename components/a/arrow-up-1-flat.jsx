import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p-dv-5xcd.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="p-dv-5xcd"/>`,
		"fallback": "streamline-color:arrow-up-1-flat",
	});
}

export default Component;
