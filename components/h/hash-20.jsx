import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kq0_hgb3f.css';
import '../../css/v/vxl90jbvh.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kq0_hgb3f"/><path class="vxl90jbvh"/>`,
		"fallback": "energy-icons:hash-20",
	});
}

export default Component;
