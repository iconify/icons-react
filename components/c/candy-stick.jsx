import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lmdh8w37g.css';

const viewBox = {"width":17,"height":17};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lmdh8w37g"/>`,
		"fallback": "si-glyph:candy-stick",
	});
}

export default Component;
