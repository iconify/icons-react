import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ux5i6zjqj.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ux5i6zjqj"/>`,
		"fallback": "si-glyph:christmass-ball",
	});
}

export default Component;
