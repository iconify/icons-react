import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hncin7bkj.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hncin7bkj"/>`,
		"fallback": "cib:buffer",
	});
}

export default Component;
