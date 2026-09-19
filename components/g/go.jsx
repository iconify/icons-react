import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k_53u5p7p.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k_53u5p7p"/>`,
		"fallback": "cib:go",
	});
}

export default Component;
