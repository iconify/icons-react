import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a06j4np7t.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a06j4np7t"/>`,
		"fallback": "fluent-mdl2:assessment-group",
	});
}

export default Component;
