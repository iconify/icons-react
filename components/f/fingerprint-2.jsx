import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xck5rbc3z.css';
import '../../css/a/akxq_dj0t.css';
import '../../css/r/rczlb0blk.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xck5rbc3z"><path class="akxq_dj0t"/><path class="rczlb0blk"/></g>`,
		"fallback": "streamline-plump:fingerprint-2",
	});
}

export default Component;
