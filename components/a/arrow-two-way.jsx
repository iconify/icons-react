import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ik5cx86xf.css';

const viewBox = {"width":16,"height":17};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ik5cx86xf"/>`,
		"fallback": "si-glyph:arrow-two-way",
	});
}

export default Component;
