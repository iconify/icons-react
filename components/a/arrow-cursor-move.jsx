import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2u665ban.css';
import '../../css/l/lo-nv6bwr.css';
import '../../css/c/cekehdbnj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="k2u665ban"><path class="lo-nv6bwr"/><path class="cekehdbnj"/></g>`,
		"fallback": "streamline-sharp-color:arrow-cursor-move",
	});
}

export default Component;
