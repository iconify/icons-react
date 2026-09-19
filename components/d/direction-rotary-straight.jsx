import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nzfwk9bhf.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nzfwk9bhf"/>`,
		"fallback": "carbon:direction-rotary-straight",
	});
}

export default Component;
