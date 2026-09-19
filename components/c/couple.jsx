import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h-7le-bnv.css';

const viewBox = {"width":480,"height":448};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h-7le-bnv"/>`,
		"fallback": "ps:couple",
	});
}

export default Component;
