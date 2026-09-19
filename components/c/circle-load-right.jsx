import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/atktmkbfg.css';

const viewBox = {"width":17,"height":17};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="atktmkbfg"/>`,
		"fallback": "si-glyph:circle-load-right",
	});
}

export default Component;
