import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tb9u9qcgo.css';

const viewBox = {"width":640,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tb9u9qcgo"/>`,
		"fallback": "fa6-solid:building-circle-exclamation",
	});
}

export default Component;
