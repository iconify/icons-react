import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mz2w0xb6i.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mz2w0xb6i"/>`,
		"fallback": "fluent-mdl2:font-decrease",
	});
}

export default Component;
