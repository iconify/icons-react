import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t2i110blz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t2i110blz"/>`,
		"fallback": "pixelarticons:ab-testing",
	});
}

export default Component;
