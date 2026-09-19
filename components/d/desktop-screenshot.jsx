import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eaissy2kh.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eaissy2kh"/>`,
		"fallback": "fluent-mdl2:desktop-screenshot",
	});
}

export default Component;
