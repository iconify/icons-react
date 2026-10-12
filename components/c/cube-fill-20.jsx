import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/klgcw32nr.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="klgcw32nr"/>`,
		"fallback": "garden:cube-fill-20",
	});
}

export default Component;
