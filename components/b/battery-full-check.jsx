import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tx4c7k3tr.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="tx4c7k3tr"/>`,
		"fallback": "ix:battery-full-check",
	});
}

export default Component;
