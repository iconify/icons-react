import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/b/b43l1ybzt.css';
import '../../css/e/ei21x3heb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path clip-rule="evenodd" class="b43l1ybzt"/><path class="ei21x3heb"/></g>`,
		"fallback": "thesvg:commanda-cohere",
	});
}

export default Component;
