import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tparw7a_r.css';

const viewBox = {"width":17,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tparw7a_r"/>`,
		"fallback": "si-glyph:arrow-three-way-2",
	});
}

export default Component;
