import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tj3lf2btc.css';

const viewBox = {"width":16,"height":17};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tj3lf2btc"/>`,
		"fallback": "si-glyph:art-board",
	});
}

export default Component;
