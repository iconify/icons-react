import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qck11v1nz.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qck11v1nz"/>`,
		"fallback": "fluent-mdl2:info",
	});
}

export default Component;
