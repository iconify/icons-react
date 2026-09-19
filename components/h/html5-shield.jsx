import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/arq7f-vxj.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="arq7f-vxj"/>`,
		"fallback": "cib:html5-shield",
	});
}

export default Component;
