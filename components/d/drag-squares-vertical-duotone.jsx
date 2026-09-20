import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h9r6e7sfq.css';
import '../../css/c/c7rjmslqy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h9r6e7sfq"/><path clip-rule="evenodd" class="c7rjmslqy"/>`,
		"fallback": "stash:drag-squares-vertical-duotone",
	});
}

export default Component;
