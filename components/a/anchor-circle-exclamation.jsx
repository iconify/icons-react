import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d8ssn3b7b.css';

const viewBox = {"width":640,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d8ssn3b7b"/>`,
		"fallback": "fa6-solid:anchor-circle-exclamation",
	});
}

export default Component;
