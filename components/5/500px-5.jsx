import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kiv2u-b4i.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kiv2u-b4i"/>`,
		"fallback": "cib:500px-5",
	});
}

export default Component;
