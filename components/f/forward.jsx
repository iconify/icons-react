import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/b/bykj-8ldy.css';
import '../../css/e/e7970wbtu.css';
import '../../css/e/e78k15v9f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="bykj-8ldy wm-k"/><path class="e7970wbtu wm-a"/><path class="e78k15v9f wm-deco"/></g>`,
		"fallback": "withicons-kawaii:forward",
	});
}

export default Component;
