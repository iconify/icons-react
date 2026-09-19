import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qzbf6_b4e.css';

const viewBox = {"width":576,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qzbf6_b4e"/>`,
		"fallback": "fa-solid:hotel",
	});
}

export default Component;
