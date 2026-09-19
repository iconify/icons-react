import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sw3a_1zej.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sw3a_1zej"/>`,
		"fallback": "fluent-mdl2:crown",
	});
}

export default Component;
