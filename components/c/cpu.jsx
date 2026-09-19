import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rcpbgyiwr.css';
import '../../css/x/x71-5zqyg.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rcpbgyiwr"/><path class="x71-5zqyg"/>`,
		"fallback": "ep:cpu",
	});
}

export default Component;
