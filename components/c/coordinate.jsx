import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q8diq5roc.css';
import '../../css/x/xko87bc4s.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q8diq5roc"/><path class="xko87bc4s"/>`,
		"fallback": "ep:coordinate",
	});
}

export default Component;
