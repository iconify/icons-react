import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ci1k7zbhf.css';

const viewBox = {"width":17,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ci1k7zbhf"/>`,
		"fallback": "si-glyph:boat",
	});
}

export default Component;
