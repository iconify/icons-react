import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eio5m-zyn.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eio5m-zyn"/>`,
		"fallback": "ix:globe-tag",
	});
}

export default Component;
