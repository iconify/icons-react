import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nvi7xvb6g.css';

const viewBox = {"width":384,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nvi7xvb6g"/>`,
		"fallback": "fa6-solid:clipboard-check",
	});
}

export default Component;
