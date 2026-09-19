import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o93lq-byo.css';
import '../../css/t/trse952dt.css';
import '../../css/r/rivzxwblk.css';
import '../../css/n/nu4hpabve.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="o93lq-byo"><path class="trse952dt"/><path class="rivzxwblk"/><path class="nu4hpabve"/></g>`,
		"fallback": "icon-park:icecream-three",
	});
}

export default Component;
