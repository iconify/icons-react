import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m9_teob1l.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m9_teob1l"/>`,
		"fallback": "zondicons:at-symbol",
	});
}

export default Component;
