import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y7tke4puh.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y7tke4puh"/>`,
		"fallback": "fluent-mdl2:deploy",
	});
}

export default Component;
