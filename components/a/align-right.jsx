import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k3kb7_czp.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k3kb7_czp"/>`,
		"fallback": "fa6-solid:align-right",
	});
}

export default Component;
