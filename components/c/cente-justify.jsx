import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x3jq2fbus.css';

const viewBox = {"width":17,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x3jq2fbus"/>`,
		"fallback": "si-glyph:cente-justify",
	});
}

export default Component;
