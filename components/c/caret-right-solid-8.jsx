import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g9x-35b2u.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g9x-35b2u"/>`,
		"fallback": "fluent-mdl2:caret-right-solid-8",
	});
}

export default Component;
