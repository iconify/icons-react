import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qzfeitich.css';
import '../../css/j/jzxguacfp.css';
import '../../css/v/v8s6amb7d.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qzfeitich"/><path class="jzxguacfp"/><path class="v8s6amb7d"/>`,
		"fallback": "openmoji:elevator",
	});
}

export default Component;
