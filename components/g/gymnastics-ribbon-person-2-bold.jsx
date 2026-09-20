import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pk1xw9dlw.css';
import '../../css/j/j7zkvzbrs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pk1xw9dlw"/><path class="j7zkvzbrs"/>`,
		"fallback": "streamline-ultimate:gymnastics-ribbon-person-2-bold",
	});
}

export default Component;
