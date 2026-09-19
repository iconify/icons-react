import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bm0h_i9fz.css';
import '../../css/g/gt-wt7bqy.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bm0h_i9fz"/><path class="gt-wt7bqy"/>`,
		"fallback": "famicons:ice-cream-sharp",
	});
}

export default Component;
