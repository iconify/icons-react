import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/x8avjbd1d.css';
import '../../css/n/nicn_dwwh.css';
import '../../css/q/qvppyhxrp.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="x8avjbd1d"/><path clip-rule="evenodd" class="nicn_dwwh"/><path class="qvppyhxrp"/></g>`,
		"fallback": "glyphs:globe-oceania-bold",
	});
}

export default Component;
