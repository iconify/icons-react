import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sx5jtdgol.css';

const viewBox = {"width":17,"height":17};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sx5jtdgol"/>`,
		"fallback": "si-glyph:arrow-thick-up",
	});
}

export default Component;
