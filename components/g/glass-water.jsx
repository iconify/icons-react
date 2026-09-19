import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m63tckbdu.css';

const viewBox = {"width":17,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m63tckbdu"/>`,
		"fallback": "si-glyph:glass-water",
	});
}

export default Component;
