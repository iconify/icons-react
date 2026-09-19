import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a1m0pe8ss.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a1m0pe8ss"/>`,
		"fallback": "carbon:data-vis-2",
	});
}

export default Component;
