import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xx3a-kbfv.css';

const viewBox = {"width":17,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xx3a-kbfv"/>`,
		"fallback": "si-glyph:hockey",
	});
}

export default Component;
