import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jravwy19z.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jravwy19z"/>`,
		"fallback": "fa6-solid:face-grin-squint-tears",
	});
}

export default Component;
