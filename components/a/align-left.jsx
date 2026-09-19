import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h37_n9-5b.css';

const viewBox = {"width":17,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h37_n9-5b"/>`,
		"fallback": "si-glyph:align-left",
	});
}

export default Component;
