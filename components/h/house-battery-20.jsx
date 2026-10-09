import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fbx5zccce.css';
import '../../css/u/uu578rb0y.css';
import '../../css/a/abch41bnj.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fbx5zccce"/><path class="uu578rb0y"/><path class="abch41bnj"/>`,
		"fallback": "energy-icons:house-battery-20",
	});
}

export default Component;
