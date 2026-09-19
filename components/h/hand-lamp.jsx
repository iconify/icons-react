import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h5wdz0b4u.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h5wdz0b4u"/>`,
		"fallback": "si-glyph:hand-lamp",
	});
}

export default Component;
