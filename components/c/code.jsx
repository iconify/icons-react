import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kgzte6aqs.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kgzte6aqs"/>`,
		"fallback": "raphael:code",
	});
}

export default Component;
