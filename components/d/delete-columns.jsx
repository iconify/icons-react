import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kt9p-ac4m.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kt9p-ac4m"/>`,
		"fallback": "fluent-mdl2:delete-columns",
	});
}

export default Component;
