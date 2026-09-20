import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yy3_swbuw.css';
import '../../css/s/s78kfibwn.css';
import '../../css/f/fj1lpac5m.css';
import '../../css/r/rrnapdaaz.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="yy3_swbuw"/><path class="s78kfibwn"/><path class="fj1lpac5m"/><path class="rrnapdaaz"/></g>`,
		"fallback": "streamline-kameleon-color:eyeglasses",
	});
}

export default Component;
