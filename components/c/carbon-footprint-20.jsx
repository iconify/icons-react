import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uv89jg_sh.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uv89jg_sh"/>`,
		"fallback": "energy-icons:carbon-footprint-20",
	});
}

export default Component;
