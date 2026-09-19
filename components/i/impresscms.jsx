import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bm43_h9lf.css';

const viewBox = {"width":1024,"height":768};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bm43_h9lf"/>`,
		"fallback": "whh:impresscms",
	});
}

export default Component;
