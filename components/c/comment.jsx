import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qp0f-kb_f.css';
import '../../css/u/u-wecgbuh.css';
import '../../css/d/dxsz4yl4g.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="qp0f-kb_f"/><path class="u-wecgbuh"/><path class="dxsz4yl4g"/></g>`,
		"fallback": "glyphs-poly:comment",
	});
}

export default Component;
