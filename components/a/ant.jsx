import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/j/jzmtqzbub.css';
import '../../css/a/alg8e30ba.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="bi12bsetm"><circle class="jzmtqzbub"/><path class="alg8e30ba"/></g>`,
		"fallback": "cryptocurrency-color:ant",
	});
}

export default Component;
