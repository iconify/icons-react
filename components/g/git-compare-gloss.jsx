import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f6509kg3l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f6509kg3l wm-k"/>`,
		"fallback": "withicons:git-compare-gloss",
	});
}

export default Component;
