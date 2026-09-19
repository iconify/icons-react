import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g9k_ldbao.css';

const viewBox = {"width":17,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g9k_ldbao"/>`,
		"fallback": "si-glyph:antenna-1",
	});
}

export default Component;
