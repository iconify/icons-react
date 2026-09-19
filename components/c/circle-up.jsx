import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hqh7083gv.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hqh7083gv"/>`,
		"fallback": "fa6-solid:circle-up",
	});
}

export default Component;
