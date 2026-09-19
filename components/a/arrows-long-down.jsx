import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ceb7hcupy.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ceb7hcupy"/>`,
		"fallback": "icons8:arrows-long-down",
	});
}

export default Component;
