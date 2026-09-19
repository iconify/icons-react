import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pppgz_8mj.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pppgz_8mj"/>`,
		"fallback": "fa6-solid:circle-chevron-left",
	});
}

export default Component;
