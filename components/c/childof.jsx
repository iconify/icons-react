import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9zqj2bgn.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y9zqj2bgn"/>`,
		"fallback": "fluent-mdl2:childof",
	});
}

export default Component;
