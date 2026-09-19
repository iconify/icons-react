import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r61ucs0yo.css';

const viewBox = {"width":17,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r61ucs0yo"/>`,
		"fallback": "si-glyph:circle-drashed",
	});
}

export default Component;
