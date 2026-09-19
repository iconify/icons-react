import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rwaiq652o.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rwaiq652o"/>`,
		"fallback": "fluent-mdl2:chevron-up-med",
	});
}

export default Component;
