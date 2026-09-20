import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cnqa97brp.css';
import '../../css/s/s-xxlii2p.css';
import '../../css/q/q0ouhhhum.css';
import '../../css/q/qy525jbwx.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cnqa97brp"/><path class="s-xxlii2p"/><path class="q0ouhhhum"/><path class="qy525jbwx"/>`,
		"fallback": "openmoji:flag-gabon",
	});
}

export default Component;
