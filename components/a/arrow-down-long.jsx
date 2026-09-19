import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bhrhhz20k.css';

const viewBox = {"width":384,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bhrhhz20k"/>`,
		"fallback": "fa6-solid:arrow-down-long",
	});
}

export default Component;
