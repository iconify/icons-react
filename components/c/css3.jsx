import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m07g8ac4p.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m07g8ac4p"/>`,
		"fallback": "foundation:css3",
	});
}

export default Component;
