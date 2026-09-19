import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx1fsfbvz.css';
import '../../css/k/kj930pbau.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jx1fsfbvz"/><path class="kj930pbau"/>`,
		"fallback": "bx:bx-window-open",
	});
}

export default Component;
