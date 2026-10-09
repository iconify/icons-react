import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jm24f5buo.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jm24f5buo"/>`,
		"fallback": "energy-icons:bank-20",
	});
}

export default Component;
