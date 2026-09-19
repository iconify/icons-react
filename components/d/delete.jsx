import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rruisqbej.css';

const viewBox = {"width":17,"height":17};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rruisqbej"/>`,
		"fallback": "si-glyph:delete",
	});
}

export default Component;
