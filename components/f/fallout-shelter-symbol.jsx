import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kt9sd4r-w.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kt9sd4r-w"/>`,
		"fallback": "pinhead:fallout-shelter-symbol",
	});
}

export default Component;
