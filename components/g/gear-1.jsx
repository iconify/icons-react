import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yjeto3wbk.css';

const viewBox = {"width":17,"height":17};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yjeto3wbk"/>`,
		"fallback": "si-glyph:gear-1",
	});
}

export default Component;
