import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q7gm_zboy.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q7gm_zboy"/>`,
		"fallback": "bytesize:heart",
	});
}

export default Component;
