import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/ayfh25-jo.css';
import '../../css/b/b5lb9fb4x.css';
import '../../css/m/m_9w60wix.css';
import '../../css/i/i88finj4i.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="ayfh25-jo"/><path class="b5lb9fb4x"/><path class="m_9w60wix"/><path class="i88finj4i"/></g>`,
		"fallback": "glyphs:crown-2-bold",
	});
}

export default Component;
