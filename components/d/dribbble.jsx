import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ov2syn0_k.css';

const viewBox = {"width":760,"height":850};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ov2syn0_k"/>`,
		"fallback": "il:dribbble",
	});
}

export default Component;
