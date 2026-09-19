import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tcp9bc3cl.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tcp9bc3cl"/>`,
		"fallback": "carbon:cloud-data-ops",
	});
}

export default Component;
