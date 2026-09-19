import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o25jv-bie.css';

const viewBox = {"width":17,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o25jv-bie"/>`,
		"fallback": "si-glyph:cheese",
	});
}

export default Component;
