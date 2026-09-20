import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u148y6bbs.css';
import '../../css/i/id-v8e4aj.css';
import '../../css/h/h1jg740us.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="u148y6bbs"><path class="id-v8e4aj"/><path class="h1jg740us"/></g>`,
		"fallback": "mage:alarm-clock",
	});
}

export default Component;
