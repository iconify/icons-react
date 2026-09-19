import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iwqu0vbxt.css';

const viewBox = {"width":17,"height":17};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="iwqu0vbxt"/>`,
		"fallback": "si-glyph:circle",
	});
}

export default Component;
