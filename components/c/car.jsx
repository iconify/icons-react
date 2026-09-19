import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/emnpnubpe.css';
import '../../css/r/rc7xdsbbr.css';
import '../../css/o/ogzqfc22r.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="emnpnubpe"/><path class="rc7xdsbbr"/><path class="ogzqfc22r"/></g>`,
		"fallback": "icon-park-outline:car",
	});
}

export default Component;
