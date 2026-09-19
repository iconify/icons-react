import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r18bzj1my.css';

const viewBox = {"width":17,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r18bzj1my"/>`,
		"fallback": "si-glyph:arrow-fullscreen",
	});
}

export default Component;
