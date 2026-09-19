import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bhl-0tduv.css';

const viewBox = {"width":17,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bhl-0tduv"/>`,
		"fallback": "si-glyph:botl-2",
	});
}

export default Component;
