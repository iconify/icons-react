import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yjnn37b9t.css';
import '../../css/s/s72ch7lqv.css';
import '../../css/p/p20uz5x5n.css';
import '../../css/q/q7b9l6bbc.css';
import '../../css/r/rmsawdb-k.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="yjnn37b9t"/><path class="s72ch7lqv"/><path class="p20uz5x5n"/><path class="q7b9l6bbc"/><path class="rmsawdb-k"/></g>`,
		"fallback": "streamline-kameleon-color:hat-2",
	});
}

export default Component;
