import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/umm606kxf.css';
import '../../css/b/bdntgfxjm.css';
import '../../css/n/n0lt7h69s.css';
import '../../css/s/s2f9pxb2h.css';

const viewBox = {"width":40,"height":40};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="umm606kxf"><path class="bdntgfxjm"/><path class="n0lt7h69s"/><path class="s2f9pxb2h"/></g>`,
		"fallback": "streamline-stickies-color:cancel-2",
	});
}

export default Component;
