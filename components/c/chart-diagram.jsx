import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vhvnv_06b.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vhvnv_06b"/>`,
		"fallback": "fa7-solid:chart-diagram",
	});
}

export default Component;
