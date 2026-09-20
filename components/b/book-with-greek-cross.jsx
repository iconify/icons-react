import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z9iqw6b3r.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z9iqw6b3r"/>`,
		"fallback": "pinhead:book-with-greek-cross",
	});
}

export default Component;
