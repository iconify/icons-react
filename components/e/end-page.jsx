import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oh8ou-bzk.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oh8ou-bzk"/>`,
		"fallback": "si-glyph:end-page",
	});
}

export default Component;
