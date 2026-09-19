import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rko2k9b4t.css';

const viewBox = {"width":17,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rko2k9b4t"/>`,
		"fallback": "si-glyph:button-tv",
	});
}

export default Component;
