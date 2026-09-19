import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jfocs8bjs.css';
import '../../css/p/pogvq370n.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="jfocs8bjs"/><circle class="pogvq370n"/></g>`,
		"fallback": "icon-park-outline:bird",
	});
}

export default Component;
