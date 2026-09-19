import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e8vllugfr.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e8vllugfr"/>`,
		"fallback": "fluent-mdl2:caret-up-solid-8",
	});
}

export default Component;
