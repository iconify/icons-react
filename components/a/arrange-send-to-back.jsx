import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v4k_rceqs.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v4k_rceqs"/>`,
		"fallback": "fluent-mdl2:arrange-send-to-back",
	});
}

export default Component;
