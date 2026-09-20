import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xck5rbc3z.css';
import '../../css/r/r_nfbwbpt.css';
import '../../css/n/n41av-8im.css';
import '../../css/g/gk2fecbga.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xck5rbc3z"><path class="r_nfbwbpt"/><path class="n41av-8im"/><path class="gk2fecbga"/></g>`,
		"fallback": "streamline-plump:atom",
	});
}

export default Component;
