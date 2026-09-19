import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n5q3_ps6n.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n5q3_ps6n"/>`,
		"fallback": "fluent-mdl2:flick-left",
	});
}

export default Component;
