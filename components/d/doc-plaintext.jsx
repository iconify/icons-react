import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l4iuwuzoo.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l4iuwuzoo"/>`,
		"fallback": "f7:doc-plaintext",
	});
}

export default Component;
