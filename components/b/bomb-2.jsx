import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wip14ubiu.css';

const viewBox = {"width":17,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wip14ubiu"/>`,
		"fallback": "si-glyph:bomb-2",
	});
}

export default Component;
