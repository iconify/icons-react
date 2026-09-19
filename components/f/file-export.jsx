import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/ll7qgv_ez.css';

const viewBox = {"width":576,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ll7qgv_ez"/>`,
		"fallback": "fa6-solid:file-export",
	});
}

export default Component;
