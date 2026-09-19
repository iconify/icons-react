import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oq0ks_b5o.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oq0ks_b5o"/>`,
		"fallback": "fluent-mdl2:header-1",
	});
}

export default Component;
