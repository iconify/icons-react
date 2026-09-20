import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/oy33mbb1m.css';
import '../../css/b/bh-0a2_gz.css';
import '../../css/c/c89945b0n.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="oy33mbb1m"/><path class="bh-0a2_gz"/><path class="c89945b0n"/></g>`,
		"fallback": "streamline-flex-color:flash-warning",
	});
}

export default Component;
