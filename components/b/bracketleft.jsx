import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c2n0ttdhg.css';

const viewBox = {"width":168,"height":954};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c2n0ttdhg"/>`,
		"fallback": "ls:bracketleft",
	});
}

export default Component;
