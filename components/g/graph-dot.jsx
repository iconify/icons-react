import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xck5rbc3z.css';
import '../../css/a/alc_zzbzf.css';
import '../../css/r/r2fuwyb8o.css';
import '../../css/q/q9kpkebqm.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xck5rbc3z"><path class="alc_zzbzf"/><path class="r2fuwyb8o"/><path class="q9kpkebqm"/></g>`,
		"fallback": "streamline-plump:graph-dot",
	});
}

export default Component;
