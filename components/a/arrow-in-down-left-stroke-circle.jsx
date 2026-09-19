import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hcbbnl92k.css';
import '../../css/r/r_38ooa_j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hcbbnl92k"/><path class="r_38ooa_j"/>`,
		"fallback": "boxicons:arrow-in-down-left-stroke-circle",
	});
}

export default Component;
