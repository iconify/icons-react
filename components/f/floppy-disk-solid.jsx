import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y971pxu-y.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="y971pxu-y"/>`,
		"fallback": "streamline:floppy-disk-solid",
	});
}

export default Component;
