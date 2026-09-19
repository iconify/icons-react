import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qsplo5bng.css';
import '../../css/z/zj7p6wbad.css';
import '../../css/w/wr1w-sbdc.css';
import '../../css/a/awxnmibuv.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="qsplo5bng"/><path class="zj7p6wbad"/><ellipse class="wr1w-sbdc"/><ellipse class="awxnmibuv"/></g>`,
		"fallback": "icon-park-outline:faceu",
	});
}

export default Component;
