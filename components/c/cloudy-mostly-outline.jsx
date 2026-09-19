import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/efb2s37wt.css';
import '../../css/o/ocyd4bb0x.css';
import '../../css/p/piya6qlkm.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="efb2s37wt"/><path class="ocyd4bb0x"/><path class="piya6qlkm"/></g>`,
		"fallback": "glyphs:cloudy-mostly-outline",
	});
}

export default Component;
