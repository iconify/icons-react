import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x_l0y2buk.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x_l0y2buk"/>`,
		"fallback": "fluent-mdl2:bulk-upload",
	});
}

export default Component;
