import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/neeg-jrvm.css';

const viewBox = {"width":17,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="neeg-jrvm"/>`,
		"fallback": "si-glyph:arrow-thin-right-top",
	});
}

export default Component;
