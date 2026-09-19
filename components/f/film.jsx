import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mkf3q2s5x.css';

const viewBox = {"width":16,"height":17};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mkf3q2s5x"/>`,
		"fallback": "si-glyph:film",
	});
}

export default Component;
