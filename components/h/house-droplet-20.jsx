import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fbx5zccce.css';
import '../../css/b/bq0mgxbxi.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fbx5zccce"/><path class="bq0mgxbxi"/>`,
		"fallback": "energy-icons:house-droplet-20",
	});
}

export default Component;
