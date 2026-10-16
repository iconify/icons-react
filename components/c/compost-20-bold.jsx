import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xf_0_vbwb.css';
import '../../css/p/pxc5p1dyz.css';
import '../../css/n/ng4ifmbhf.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xf_0_vbwb"/><path class="pxc5p1dyz"/><path class="ng4ifmbhf"/>`,
		"fallback": "energy-icons:compost-20-bold",
	});
}

export default Component;
