import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufvqhk53l.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ufvqhk53l"/>`,
		"fallback": "si-glyph:basket-arrow-left",
	});
}

export default Component;
