import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lr2he0bol.css';

const viewBox = {"width":544,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lr2he0bol"/>`,
		"fallback": "fa-solid:chart-pie",
	});
}

export default Component;
