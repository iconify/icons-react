import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/qmijmpbpd.css';
import '../../css/g/gdpi26mpl.css';
import '../../css/v/vhe5-sisy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="qmijmpbpd"/><path class="gdpi26mpl"/><path class="vhe5-sisy"/></g>`,
		"fallback": "reicon:document-copy-filled",
	});
}

export default Component;
