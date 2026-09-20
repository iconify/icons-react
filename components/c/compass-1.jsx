import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/umm606kxf.css';
import '../../css/b/bdntgfxjm.css';
import '../../css/u/ufjhxs-th.css';
import '../../css/z/zu4hk2b5n.css';
import '../../css/d/dhwjdc46i.css';

const viewBox = {"width":40,"height":40};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="umm606kxf"><path class="bdntgfxjm"/><path class="ufjhxs-th"/><path class="zu4hk2b5n"/><path class="dhwjdc46i"/></g>`,
		"fallback": "streamline-stickies-color:compass-1",
	});
}

export default Component;
