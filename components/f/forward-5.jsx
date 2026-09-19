import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o-x0dsblc.css';
import '../../css/a/a8h6erbng.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o-x0dsblc"/><path class="a8h6erbng"/>`,
		"fallback": "carbon:forward-5",
	});
}

export default Component;
