import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/oum1-k3bs.css';
import '../../css/m/mwtu4unnv.css';
import '../../css/k/kgo_0dbpa.css';
import '../../css/o/o3uhfacov.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="oum1-k3bs"/><path class="mwtu4unnv"/><path class="kgo_0dbpa"/><path class="o3uhfacov"/></g>`,
		"fallback": "glyphs:ear-outline",
	});
}

export default Component;
