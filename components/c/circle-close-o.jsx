import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ct-exp8sn.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ct-exp8sn"/>`,
		"fallback": "uiw:circle-close-o",
	});
}

export default Component;
