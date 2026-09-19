import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ciisitb7j.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ciisitb7j"/>`,
		"fallback": "ep:eleme-filled",
	});
}

export default Component;
