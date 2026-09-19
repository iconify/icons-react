import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gxx3h--im.css';

const viewBox = {"width":17,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gxx3h--im"/>`,
		"fallback": "si-glyph:arrow-shuffle",
	});
}

export default Component;
