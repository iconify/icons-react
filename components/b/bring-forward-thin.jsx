import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e2ohupbqq.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e2ohupbqq"/>`,
		"fallback": "pullo:bring-forward-thin",
	});
}

export default Component;
