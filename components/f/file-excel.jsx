import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uyb6fervv.css';

const viewBox = {"width":384,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uyb6fervv"/>`,
		"fallback": "fa6-solid:file-excel",
	});
}

export default Component;
