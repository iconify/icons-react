import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uprmt5bxp.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uprmt5bxp"/>`,
		"fallback": "fluent-mdl2:drag-object",
	});
}

export default Component;
