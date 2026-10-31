import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/c/ca803xiyh.css';
import '../../css/l/lptgplb-t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="ca803xiyh"/><path class="lptgplb-t wm-deco"/></g>`,
		"fallback": "withicons-kawaii:command",
	});
}

export default Component;
