import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/paae67brf.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="paae67brf"/>`,
		"fallback": "fluent-mdl2:hide-3",
	});
}

export default Component;
