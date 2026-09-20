import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cq8bihblg.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="cq8bihblg"/>`,
		"fallback": "lsicon:bbq-filled",
	});
}

export default Component;
