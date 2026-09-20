import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wf7bxabmy.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wf7bxabmy"/>`,
		"fallback": "pinhead:coconut-palm-tree-on-hill",
	});
}

export default Component;
