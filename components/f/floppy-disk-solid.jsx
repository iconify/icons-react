import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qxgpa7l1q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="qxgpa7l1q"/>`,
		"fallback": "flowbite:floppy-disk-solid",
	});
}

export default Component;
