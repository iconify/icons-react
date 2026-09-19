import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s-icr-r2i.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s-icr-r2i"/>`,
		"fallback": "carbon:horizontal-view",
	});
}

export default Component;
