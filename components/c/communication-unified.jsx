import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a0m-w9b8a.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a0m-w9b8a"/>`,
		"fallback": "carbon:communication-unified",
	});
}

export default Component;
