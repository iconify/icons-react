import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/ljp-s5bfn.css';

const viewBox = {"width":960,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ljp-s5bfn"/>`,
		"fallback": "whh:drmanhattan",
	});
}

export default Component;
