import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jjh-8ebsy.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jjh-8ebsy"/>`,
		"fallback": "fluent-mdl2:flick-right",
	});
}

export default Component;
