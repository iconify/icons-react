import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hszia39-u.css';

const viewBox = {"width":17,"height":17};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hszia39-u"/>`,
		"fallback": "si-glyph:id-badge",
	});
}

export default Component;
