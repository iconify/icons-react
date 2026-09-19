import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bs8p12bia.css';

const viewBox = {"width":17,"height":17};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bs8p12bia"/>`,
		"fallback": "si-glyph:alien",
	});
}

export default Component;
