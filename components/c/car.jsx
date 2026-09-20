import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fv00gzbnl.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fv00gzbnl"/>`,
		"fallback": "raphael:car",
	});
}

export default Component;
