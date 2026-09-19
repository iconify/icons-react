import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uez273bbq.css';
import '../../css/h/hhu-8gb9v.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uez273bbq"/><path class="hhu-8gb9v"/>`,
		"fallback": "carbon:data-refinery-reference",
	});
}

export default Component;
