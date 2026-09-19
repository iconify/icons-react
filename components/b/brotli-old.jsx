import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xcgs8uiau.css';

const viewBox = {"width":374,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xcgs8uiau"/>`,
		"fallback": "file-icons:brotli-old",
	});
}

export default Component;
