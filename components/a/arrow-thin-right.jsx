import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tne_u8arr.css';

const viewBox = {"width":17,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tne_u8arr"/>`,
		"fallback": "si-glyph:arrow-thin-right",
	});
}

export default Component;
