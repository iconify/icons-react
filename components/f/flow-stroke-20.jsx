import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t2m1qqb7g.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t2m1qqb7g"/>`,
		"fallback": "garden:flow-stroke-20",
	});
}

export default Component;
