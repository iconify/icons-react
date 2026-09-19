import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/ba_3aab4u.css';

const viewBox = {"width":17,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ba_3aab4u"/>`,
		"fallback": "si-glyph:chair-1",
	});
}

export default Component;
