import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c-zsa5bjg.css';
import '../../css/j/j0-b_gamb.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c-zsa5bjg"/><path class="j0-b_gamb"/>`,
		"fallback": "ion:document-attach-sharp",
	});
}

export default Component;
