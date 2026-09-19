import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o4y7i6zog.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o4y7i6zog"/>`,
		"fallback": "fluent-mdl2:filter",
	});
}

export default Component;
