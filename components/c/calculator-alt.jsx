import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uv_nh4bts.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uv_nh4bts"/>`,
		"fallback": "fa-solid:calculator-alt",
	});
}

export default Component;
