import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vpeh0zdbp.css';

const viewBox = {"width":17,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vpeh0zdbp"/>`,
		"fallback": "si-glyph:arrow-four-way",
	});
}

export default Component;
