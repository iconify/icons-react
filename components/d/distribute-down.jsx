import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yzjr7pbfi.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yzjr7pbfi"/>`,
		"fallback": "fluent-mdl2:distribute-down",
	});
}

export default Component;
