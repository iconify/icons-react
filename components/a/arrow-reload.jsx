import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/my91cbcgz.css';

const viewBox = {"width":17,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="my91cbcgz"/>`,
		"fallback": "si-glyph:arrow-reload",
	});
}

export default Component;
