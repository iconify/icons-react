import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/bivr09fnn.css';
import '../../css/v/vjo6m_bwu.css';
import '../../css/i/ihtd0j-_z.css';
import '../../css/x/xeugi8bqs.css';
import '../../css/d/d_mpy6b4b.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="bivr09fnn"/><path clip-rule="evenodd" class="vjo6m_bwu"/><path clip-rule="evenodd" class="ihtd0j-_z"/><path clip-rule="evenodd" class="xeugi8bqs"/><path clip-rule="evenodd" class="d_mpy6b4b"/></g>`,
		"fallback": "pepicons-print:enter",
	});
}

export default Component;
