import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xeacgbczg.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xeacgbczg"/>`,
		"fallback": "ep:folder-opened",
	});
}

export default Component;
