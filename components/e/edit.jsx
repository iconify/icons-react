import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/m/mk263c2vx.css';
import '../../css/y/yetgw9b4w.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="mk263c2vx"/><path class="yetgw9b4w"/></g>`,
		"fallback": "si-glyph:edit",
	});
}

export default Component;
