import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f4x-kekqu.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f4x-kekqu"/>`,
		"fallback": "fluent-mdl2:caret-bottom-left-solid-8",
	});
}

export default Component;
