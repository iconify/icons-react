import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jk9klbblz.css';
import '../../css/j/j8rsm4b8k.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jk9klbblz"/><path class="j8rsm4b8k"/>`,
		"fallback": "energy-icons:inbox-20",
	});
}

export default Component;
