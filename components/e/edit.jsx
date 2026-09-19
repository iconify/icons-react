import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bro3b7b7u.css';
import '../../css/p/ptu48kbob.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bro3b7b7u"/><path class="ptu48kbob"/>`,
		"fallback": "ep:edit",
	});
}

export default Component;
