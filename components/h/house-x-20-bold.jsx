import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zuveebb1b.css';
import '../../css/z/ziroa4b5h.css';
import '../../css/d/dz0fjhb9o.css';
import '../../css/c/cejnnhkdt.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zuveebb1b"/><path class="ziroa4b5h"/><path class="dz0fjhb9o"/><path class="cejnnhkdt"/>`,
		"fallback": "energy-icons:house-x-20-bold",
	});
}

export default Component;
