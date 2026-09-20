import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h01tyzbfu.css';
import '../../css/b/brlq74b8o.css';
import '../../css/b/bywvdos1b.css';
import '../../css/k/kjqls4k3a.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="h01tyzbfu"><path class="brlq74b8o"/><path class="bywvdos1b"/><path class="kjqls4k3a"/></g>`,
		"fallback": "streamline-flex:curves-levels-graph",
	});
}

export default Component;
