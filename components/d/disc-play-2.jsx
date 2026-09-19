import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/obdrwxfti.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="obdrwxfti"/>`,
		"fallback": "si-glyph:disc-play-2",
	});
}

export default Component;
