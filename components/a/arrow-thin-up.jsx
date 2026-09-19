import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gfta2whtq.css';

const viewBox = {"width":17,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gfta2whtq"/>`,
		"fallback": "si-glyph:arrow-thin-up",
	});
}

export default Component;
