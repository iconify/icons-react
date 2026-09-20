import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eyx_a2aii.css';
import '../../css/k/kqo6pkb1q.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eyx_a2aii"/><path class="kqo6pkb1q"/>`,
		"fallback": "streamline-pixel:food-drink-desert-icecream",
	});
}

export default Component;
