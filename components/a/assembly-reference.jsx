import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w571e2b3l.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w571e2b3l"/>`,
		"fallback": "carbon:assembly-reference",
	});
}

export default Component;
