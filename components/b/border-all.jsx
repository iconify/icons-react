import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nex2kb9vb.css';

const viewBox = {"width":384,"height":384};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nex2kb9vb"/>`,
		"fallback": "zmdi:border-all",
	});
}

export default Component;
