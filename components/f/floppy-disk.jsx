import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/c/c8v4utbty.css';
import '../../css/s/sddaa6bdn.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="c8v4utbty"/><path class="sddaa6bdn"/></g>`,
		"fallback": "pepicons-pencil:floppy-disk",
	});
}

export default Component;
