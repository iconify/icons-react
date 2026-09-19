import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k3eoygbat.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k3eoygbat"/>`,
		"fallback": "fluent-mdl2:double-chevron-right-8",
	});
}

export default Component;
