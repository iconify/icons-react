import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b7o_thdxx.css';

const viewBox = {"width":640,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b7o_thdxx"/>`,
		"fallback": "fa-solid:head-side-cough",
	});
}

export default Component;
