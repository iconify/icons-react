import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s392k2bak.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s392k2bak"/>`,
		"fallback": "si-glyph:hammer-and-wrench",
	});
}

export default Component;
