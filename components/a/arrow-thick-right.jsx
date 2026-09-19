import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wh2o-wywp.css';

const viewBox = {"width":17,"height":17};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wh2o-wywp"/>`,
		"fallback": "si-glyph:arrow-thick-right",
	});
}

export default Component;
