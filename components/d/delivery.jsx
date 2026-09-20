import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/t/ts1cxtl6k.css';
import '../../css/n/ncxi63b-u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="ts1cxtl6k"/><path class="ncxi63b-u"/></g>`,
		"fallback": "reicon:delivery",
	});
}

export default Component;
