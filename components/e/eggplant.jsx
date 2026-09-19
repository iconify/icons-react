import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o93lq-byo.css';
import '../../css/s/svaa2ob7z.css';
import '../../css/y/yzjq06bkq.css';
import '../../css/n/np9bfzb7v.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="o93lq-byo"><path class="svaa2ob7z"/><path class="yzjq06bkq"/><path class="np9bfzb7v"/></g>`,
		"fallback": "icon-park:eggplant",
	});
}

export default Component;
