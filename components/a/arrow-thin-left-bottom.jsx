import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tdjq8sbwh.css';

const viewBox = {"width":17,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tdjq8sbwh"/>`,
		"fallback": "si-glyph:arrow-thin-left-bottom",
	});
}

export default Component;
