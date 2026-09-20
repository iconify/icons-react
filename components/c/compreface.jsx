import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zx-eez2fk.css';
import '../../css/q/qhl_bsc2l.css';
import '../../css/j/j4fy5j07e.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zx-eez2fk"/><path class="qhl_bsc2l"/><path class="j4fy5j07e"/>`,
		"fallback": "selfhst:compreface",
	});
}

export default Component;
