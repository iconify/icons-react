import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/f4aqigbyu.css';
import '../../css/m/mhe045bgf.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="f4aqigbyu"/><path class="mhe045bgf"/></g>`,
		"fallback": "healthicons:fever",
	});
}

export default Component;
