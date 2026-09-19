import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cex5gdbec.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cex5gdbec"/>`,
		"fallback": "fluent-mdl2:diet-plan-notebook",
	});
}

export default Component;
