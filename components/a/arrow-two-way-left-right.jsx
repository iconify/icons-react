import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xcxncr7km.css';

const viewBox = {"width":17,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xcxncr7km"/>`,
		"fallback": "si-glyph:arrow-two-way-left-right",
	});
}

export default Component;
