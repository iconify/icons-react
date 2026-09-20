import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hdk8769xs.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="hdk8769xs"/>`,
		"fallback": "ix:connection-fail",
	});
}

export default Component;
