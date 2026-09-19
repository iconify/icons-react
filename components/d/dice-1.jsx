import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zckc6lblg.css';

const viewBox = {"width":17,"height":17};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zckc6lblg"/>`,
		"fallback": "si-glyph:dice-1",
	});
}

export default Component;
