import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zv5q-5cgz.css';
import '../../css/g/ga_k3d8mk.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zv5q-5cgz"/><path class="ga_k3d8mk"/>`,
		"fallback": "icomoon-free:amazon",
	});
}

export default Component;
