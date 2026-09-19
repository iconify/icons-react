import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bxng2-aly.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bxng2-aly"/>`,
		"fallback": "foundation:folder-add",
	});
}

export default Component;
