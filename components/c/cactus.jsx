import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/denthcbya.css';
import '../../css/r/roadlpwdh.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="denthcbya"/><path class="roadlpwdh"/>`,
		"fallback": "openmoji:cactus",
	});
}

export default Component;
