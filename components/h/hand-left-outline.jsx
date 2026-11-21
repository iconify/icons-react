import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lvt1q9bhv.css';
import '../../css/j/jp9nm159y.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lvt1q9bhv"/><path class="jp9nm159y"/>`,
		"fallback": "ion:hand-left-outline",
	});
}

export default Component;
