import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ek__51g7j.css';

const viewBox = {"width":17,"height":17};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ek__51g7j"/>`,
		"fallback": "si-glyph:horse-shoe",
	});
}

export default Component;
