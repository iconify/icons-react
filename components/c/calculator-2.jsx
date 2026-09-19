import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ez__yk4iu.css';

const viewBox = {"width":17,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ez__yk4iu"/>`,
		"fallback": "si-glyph:calculator-2",
	});
}

export default Component;
