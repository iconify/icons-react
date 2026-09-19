import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ued2yndek.css';

const viewBox = {"width":17,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ued2yndek"/>`,
		"fallback": "si-glyph:cross-hair-2",
	});
}

export default Component;
