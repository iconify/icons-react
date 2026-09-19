import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/enisynbeh.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="enisynbeh"/>`,
		"fallback": "carbon:ibm-db2-alt",
	});
}

export default Component;
