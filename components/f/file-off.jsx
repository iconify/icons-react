import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cw-v9-b3h.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cw-v9-b3h"/>`,
		"fallback": "fluent-mdl2:file-off",
	});
}

export default Component;
