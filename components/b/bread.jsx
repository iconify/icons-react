import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pk-v9cckq.css';

const viewBox = {"width":16,"height":17};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pk-v9cckq"/>`,
		"fallback": "si-glyph:bread",
	});
}

export default Component;
