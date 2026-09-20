import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lptxm0b2f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lptxm0b2f"/>`,
		"fallback": "thesvg-color:falcon",
	});
}

export default Component;
