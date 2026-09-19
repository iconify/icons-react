import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vcov7on7i.css';

const viewBox = {"width":17,"height":17};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vcov7on7i"/>`,
		"fallback": "si-glyph:battery-empty",
	});
}

export default Component;
