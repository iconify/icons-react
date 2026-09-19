import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gm4isn3js.css';
import '../../css/y/y711oejcz.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gm4isn3js"/><path class="y711oejcz"/>`,
		"fallback": "carbon:cloud-ceiling",
	});
}

export default Component;
