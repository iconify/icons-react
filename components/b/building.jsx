import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dtfo2gk7y.css';

const viewBox = {"width":17,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dtfo2gk7y"/>`,
		"fallback": "si-glyph:building",
	});
}

export default Component;
