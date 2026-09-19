import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lkdrpxbpw.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lkdrpxbpw"/>`,
		"fallback": "fa7-solid:grin-tongue-wink",
	});
}

export default Component;
