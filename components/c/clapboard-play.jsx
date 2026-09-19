import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bv36e_oum.css';

const viewBox = {"width":16,"height":17};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bv36e_oum"/>`,
		"fallback": "si-glyph:clapboard-play",
	});
}

export default Component;
