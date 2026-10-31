import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k7_zgycnc.css';
import '../../css/c/cvnkzubzf.css';
import '../../css/c/co6jghbwv.css';
import '../../css/p/p22y_eu9q.css';
import '../../css/e/e46mbnj3x.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="k7_zgycnc"/><path class="cvnkzubzf"/><path class="co6jghbwv"/><path class="p22y_eu9q"/><path class="e46mbnj3x"/></g>`,
		"fallback": "streamline-kameleon-color:cart-pop",
	});
}

export default Component;
