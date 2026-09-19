import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gwjyk7hlf.css';

const viewBox = {"width":17,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gwjyk7hlf"/>`,
		"fallback": "si-glyph:arrow-thick-left",
	});
}

export default Component;
