import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ie1a0_6jd.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ie1a0_6jd"/>`,
		"fallback": "carbon:earth-americas",
	});
}

export default Component;
