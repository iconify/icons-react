import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gyihokqvh.css';
import '../../css/y/yyovchb1w.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gyihokqvh"/><path class="yyovchb1w"/>`,
		"fallback": "carbon:direction-right-02-filled",
	});
}

export default Component;
