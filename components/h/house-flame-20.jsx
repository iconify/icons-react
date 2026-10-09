import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fbx5zccce.css';
import '../../css/u/udz3a5b9j.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fbx5zccce"/><path class="udz3a5b9j"/>`,
		"fallback": "energy-icons:house-flame-20",
	});
}

export default Component;
