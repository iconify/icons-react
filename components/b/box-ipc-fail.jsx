import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t4zn-mv5y.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="t4zn-mv5y"/>`,
		"fallback": "ix:box-ipc-fail",
	});
}

export default Component;
