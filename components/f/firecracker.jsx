import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/p/pbo278p9l.css';
import '../../css/g/g7uevfb2t.css';
import '../../css/t/t8mmmlb9m.css';
import '../../css/o/ocqlkk5_u.css';
import '../../css/v/vqjmhgbgi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="pbo278p9l"/><path class="g7uevfb2t wm-shine"/><path class="t8mmmlb9m wm-k"/><path class="ocqlkk5_u wm-a"/><path class="vqjmhgbgi wm-deco"/></g>`,
		"fallback": "withicons-kawaii:firecracker",
	});
}

export default Component;
