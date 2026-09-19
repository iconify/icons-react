import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p2sfrl00p.css';

const viewBox = {"width":17,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p2sfrl00p"/>`,
		"fallback": "si-glyph:circle-help",
	});
}

export default Component;
