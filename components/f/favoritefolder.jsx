import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qei0usz3g.css';

const viewBox = {"width":1025,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qei0usz3g"/>`,
		"fallback": "whh:favoritefolder",
	});
}

export default Component;
