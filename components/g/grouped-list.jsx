import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fq5yp-byd.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fq5yp-byd"/>`,
		"fallback": "fluent-mdl2:grouped-list",
	});
}

export default Component;
