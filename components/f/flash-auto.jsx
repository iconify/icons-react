import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d27yqc0ed.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d27yqc0ed"/>`,
		"fallback": "fluent-mdl2:flash-auto",
	});
}

export default Component;
