import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jj3g4qi-v.css';
import '../../css/f/fcca0vb6b.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jj3g4qi-v"/><path class="fcca0vb6b"/>`,
		"fallback": "energy-icons:carbon-budget-20",
	});
}

export default Component;
