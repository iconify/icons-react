import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t114_gb4r.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t114_gb4r"/>`,
		"fallback": "fa7-solid:chart-bar",
	});
}

export default Component;
