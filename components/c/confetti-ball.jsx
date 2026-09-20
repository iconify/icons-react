import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pn_6w-26x.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pn_6w-26x"/>`,
		"fallback": "pinhead:confetti-ball",
	});
}

export default Component;
