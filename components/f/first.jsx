import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/n/nfsjvabfk.css';
import '../../css/i/i9tl2-vaz.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="nfsjvabfk"/><path class="i9tl2-vaz"/></g>`,
		"fallback": "icon-park:first",
	});
}

export default Component;
