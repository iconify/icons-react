import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u13p1nbdv.css';

const viewBox = {"width":17,"height":17};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u13p1nbdv"/>`,
		"fallback": "si-glyph:emoticon",
	});
}

export default Component;
