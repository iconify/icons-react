import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mb1c7ms0l.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mb1c7ms0l"/>`,
		"fallback": "ep:document-copy",
	});
}

export default Component;
