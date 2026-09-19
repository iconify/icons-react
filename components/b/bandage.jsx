import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v2l6rf1jc.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v2l6rf1jc"/>`,
		"fallback": "si-glyph:bandage",
	});
}

export default Component;
