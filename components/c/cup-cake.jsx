import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hf1gocc-a.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hf1gocc-a"/>`,
		"fallback": "si-glyph:cup-cake",
	});
}

export default Component;
